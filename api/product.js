var path = require("path");
var paginate = require("jw-paginate");

module.exports = {
  addApi: function(app, conn) {
    app.get("/product/getProduct", (req, res) => {
      let prodSql =
        "select p.*,pi.*,pd.* from products p " +
        "left join product_image pi on pi.product_id = p.product_id " +
        "left join product_details pd on pd.product_id = p.product_id ";

      let prodfeatureSql =
        "select p.*,pf.* from products p " +
        "left join product_feature pf on pf.product_id = p.product_id ";

      conn.query(`${prodSql};${prodfeatureSql}`, function(err, results) {
        if (err) throw err;
        res.send(results);
      });
    });

    app.get(
      "/product/getShopProduct/:categoryId/:subcategoryId/:filterData/:pageNo",
      (req, res) => {
        const filterData = JSON.parse(req.params.filterData);        
        const categoryId = req.params.categoryId;
        const subcategoryId = JSON.parse(req.params.subcategoryId);
        const page = req.params.pageNo || 1;
        const pageSize = 4;

        let prodSql =
          "select p.*,pd.quantity,pd.unit_price " +
          " from products p  " +
          " left join product_details pd on pd.product_id = p.product_id " +
          " left join subcategory sb on sb.sub_category_id = p.sub_category_id ";

        let filterWhereSql = "";
        if (Object.entries(filterData).length > 0) {
          let filterId = [];
          let filterValue = [];
          for (var filterid in filterData) {
            filterId.push(filterid);
            for (var filterval of filterData[filterid]) {
              filterValue.push(`'${filterval}'`);
            }
          }

          prodSql += ` left join product_feature pf on pf.product_id = p.product_id `;

          filterWhereSql += `  and pf.feature_id in (${filterId}) and pf.feature_Value in (${filterValue}) `;
        }

        if (subcategoryId.length > 0) {
          filterWhereSql += `  and sb.sub_category_id in (${subcategoryId})  `;
        }

        prodSql += ` where sb.category_id  = ${categoryId}  ${filterWhereSql} `;

        conn.query(`${prodSql}`, function(err, results) {
          if (err) throw err;

          let data = {};

          const pager = paginate(results.length, page, pageSize);
          data["pager"] = pager;
          data["productList"] = results.slice(
            pager.startIndex,
            pager.endIndex + 1
          );

          res.send(
            JSON.stringify({ status: 200, error: null, response: data })
          );
        });
      }
    );

    app.get("/product/getFilter/:categoryId", (req, res) => {
      const categoryId = req.params.categoryId;
      let prodFeatureSql =
        ` select distinct pf.feature_id, pf.name, pf.feature_Value from ` +
        ` (select f.name, pf.* from feature f right join product_feature pf on f.feature_id = pf.feature_id ` +
        ` where sub_category_id in (select sub_category_id from subcategory where category_id = ${categoryId} )) as pf order by pf.name `;
      let featureSql = `select * from feature where sub_category_id in (select sub_category_id from subcategory where category_id = ${categoryId} )`;

      let subCategorySql = ` select * from subcategory where category_id = ${categoryId} `;

      conn.query(`${featureSql};${prodFeatureSql};${subCategorySql}`, function(
        err,
        results
      ) {
        if (err) throw err;
        res.send(results);
      });
    });


    app.get('/product/getProductById/:productId',(req,res) => {
      const productId = req.params.productId;
      let prodSql = ` select p.*, pi.*, pd.* from products p ` +
                    ` left join product_image pi on pi.product_id = p.product_id ` +
                    ` left join product_details pd on pd.product_id = p.product_id ` +
                    ` where p.product_id = ${productId} `;

          conn.query(`${prodSql}`,(err,results) => {
              if (err) throw err;
              res.send(results);
          });

                  });

    function addMulImages(files) {
      let imagePath = [];
      files.forEach(file => {
        dest = path.join(__basedir, "/assets/upload/product/", file.name);
        imagePath.push(path.join("/assets/upload/product/", file.name));

        file.mv(dest, err => {
          if (err) throw err;
        });
      });
      return imagePath;
    }

    app.post("/product/saveProduct", (req, res) => {
      let data = req.query;

      let imagePath = [];

      if (req.files != null) {
        const files = req.files.file;
        imagePath = addMulImages(files);
      } else {
        imagePath[0] = data.image;
        imagePath[1] = data.image_url1;
        imagePath[2] = data.image_url2;
        imagePath[3] = data.image_url3;
        imagePath[4] = data.image_url4;
      }

      let prodValues = [
        data.name,
        data.description,
        imagePath[0],
        parseInt(data.category_id)
      ];

      let prodDtlValues = [data.quantity, data.unit_price];

      let prodImageValues = [
        imagePath[1],
        imagePath[2],
        imagePath[3],
        imagePath[4]
      ];

      let prodfeatureValues = JSON.parse(data.featureList);

      let prodSql =
        "insert into products (name,description,image,sub_category_id) values (?,?,?,?)";
      let prodDtlSql =
        "insert into product_details (quantity,unit_price,product_id) values (?,?,?)";
      let prodImageSql =
        "insert into product_image (image_url1,image_url2,image_url3,image_url4,product_id) values (?,?,?,?,?)";
      let prodfeatureSql =
        "insert into product_feature (feature_Value,feature_id,product_id,product_feature_id) values (?,?,?,?)";

      if (data.product_id != null) {
        prodSql =
          "UPDATE products SET  name = ? ,description = ? ,image = ? , category_id = ? WHERE  product_id = " +
          data.product_id;
        prodDtlSql =
          "UPDATE product_details SET  quantity = ? , unit_price = ?  , product_id = ? WHERE  product_detail_id = " +
          data.product_detail_id;
        prodImageSql =
          "UPDATE product_image SET image_url1 = ? ,image_url2 = ? ,image_url3 = ? , image_url4 = ? , product_id = ? WHERE  prod_image_id = " +
          data.prod_image_id;
        prodfeatureSql =
          "UPDATE product_feature SET feature_Value = ? , feature_id = ? , product_id = ? WHERE  product_feature_id = ? ";
      }

      conn.query(prodSql, prodValues, (err, results) => {
        if (err) throw err;
        var productId = results.insertId;
        if (productId == 0) {
          productId = data.product_id;
        }

        prodDtlValues.push(productId);
        prodImageValues.push(productId);

        prodfeatureValues.map(result => (result[2] = productId));

        conn.query(prodDtlSql, prodDtlValues, (err, results) => {
          if (err) throw err;

          conn.query(prodImageSql, prodImageValues, (err, results) => {
            if (err) throw err;

            prodfeatureValues.forEach(feature => {
              conn.query(prodfeatureSql, feature, (err, results) => {
                if (err) throw err;
              });
            });
          });
        });
        res.send(results);
      });
    });

    app.delete("/product/deleteProduct/:id", (req, res) => {
      let product_id = req.params.id;
      let prodSql = "Delete from products where product_id = " + product_id;
      let prodDtlSql =
        "Delete from product_details where product_id = " + product_id;
      let prodImageSql =
        "Delete from product_image where product_id = " + product_id;
      let prodfeatureSql =
        "Delete from product_feature where product_id = " + product_id;

      conn.query(
        `${prodSql};${prodDtlSql};${prodImageSql};${prodfeatureSql}`,
        function(err, results) {
          if (err) throw err;
          res.send(results);
        }
      );
    });
  }
};

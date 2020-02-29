var path = require("path");

module.exports = {
  addApi: function(app, conn) {
    app.get("/category/getSubCategory", (req, res) => {
      let sql =
        "SELECT sb.*, c.name as Category FROM subcategory  sb left join category c on c.category_id = sb.category_id ";
      let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });

    app.post("/category/saveSubCategory", (req, res) => {
      let data = req.query;

      let imagePath = data.image;

      if (req.files != null) {
        const file = req.files.file;

        dest = path.join(__basedir, "/assets/upload/category/subcategory/", file.name);
        imagePath = path.join("/assets/upload/category/subcategory/", file.name);
        file.mv(dest, err => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
        });
      }

      let values = [
        data.name,
        data.description,
        imagePath,
        parseInt(data.category_id)
      ];

      let sql =
        "insert into subcategory (name,description,image,category_id) values (?,?,?,?)";
      if (data.sub_category_id != null) {
        sql =
          "UPDATE subcategory SET  name = ? ,description = ? ,image = ? , category_id = ? WHERE  sub_category_id = " +
          data.sub_category_id;
      }

      conn.query(sql, values, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });

    app.delete("/category/deleteSubCategory/:id", (req, res) => {
      let sub_category_id = req.params.id;
      let sql =
        "Delete from subcategory where sub_category_id = " + sub_category_id;
      conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
  }
};

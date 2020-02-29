var path = require("path");

module.exports = {
  addApi: function(app, conn) {
    app.get("/category/getFeature", (req, res) => {
      let sql =
        "SELECT sb.*, c.name as SubCategory FROM feature sb left join subcategory c on c.sub_category_id = sb.sub_category_id ";
      let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });

    app.post("/category/saveFeature", (req, res) => {
      let data = req.query;

      let imagePath = data.image;

      if (req.files != null) {
        const file = req.files.file;

        dest = path.join(__basedir, "/assets/upload/category/feature/", file.name);
        imagePath = path.join("/assets/upload/category/feature/", file.name);
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
        parseInt(data.sub_category_id)
      ];

      let sql =
        "insert into feature (name,description,image,sub_category_id) values (?,?,?,?)";
      if (data.feature_id != null) {
        sql =
          "UPDATE feature SET  name = ? ,description = ? ,image = ? , sub_category_id = ? WHERE  feature_id = " +
          data.feature_id;
      }

      conn.query(sql, values, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });

    app.delete("/category/deleteFeature/:id", (req, res) => {
      let feature_id = req.params.id;
      let sql =
        "Delete from feature where feature_id = " + feature_id;
      conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
  }
};

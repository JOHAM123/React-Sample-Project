var path = require("path");

module.exports = {
  addApi: function(app,conn) {
    app.get("/category/getCategory", (req, res) => {
      let sql = "SELECT * FROM category";
      let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });

    app.post("/category/saveCategory", (req, res) => {
      let data = req.query;

      let imagePath = data.image;

      if (req.files != null) {
        const file = req.files.file;

        dest = path.join(__basedir, "/assets/upload/category/", file.name);
        imagePath = path.join("/assets/upload/category/", file.name);
        file.mv(dest, err => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
        });
      }

      let values = [data.name, data.description, imagePath];

      let sql = "insert into category (name,description,image) values (?,?,?)";
      if (data.category_id != null) {
        sql =
          "UPDATE category SET  name = ? ,description = ? ,image = ? WHERE  category_id = " +
          data.category_id;
      }

      conn.query(sql, values, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });

    app.delete("/category/deleteCategory/:id", (req, res) => {
      let category_id = req.params.id;
      let sql = "Delete from category where category_id = " + category_id;
      conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
  }
};

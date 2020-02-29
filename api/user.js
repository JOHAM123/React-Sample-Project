var path = require("path");

module.exports = {
  addApi: function(app, conn) {
    app.get("/user/getUser", (req, res) => {
      let sql = "SELECT * FROM user";
      let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });

    app.post("/user/saveUser", (req, res) => {
      let data = req.query;

      let imagePath = data.image;

      if (req.files != null) {
        const file = req.files.file;

        dest = path.join(__basedir, "/assets/upload/user/", file.name);
        imagePath = path.join("/assets/upload/user/", file.name);
        file.mv(dest, err => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
        });
      }

      let values = [
        data.fname,
        data.lname,
        data.username,
        data.password,
        data.role,
        data.image,
        data.email,
        data.address,
        data.age,
        data.contactno,
        data.state,
        data.country,
        data.pinCode
      ];

      let sql =
        "insert into user (fname,lname,username,password,role,image,email,address,age,contactno,state,country,pinCode) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
      if (data.user_id != null) {
        sql =
          "UPDATE user SET fname = ? ,lname = ? ,username = ? ,password = ? ,role = ? ,image = ? ,email = ? ,address = ? ,age = ? ,contactno = ? ,state = ? ,country = ? , pinCode = ? WHERE  user_id = " +
          data.user_id;
      }

      conn.query(sql, values, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });

    app.delete("/user/deleteUser/:id", (req, res) => {
      let user_id = req.params.id;
      let sql = "Delete from user where user_id = " + user_id;
      conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
  }
};

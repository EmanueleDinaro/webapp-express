const connection = require("../data/db");

//Index
function index(req, res) {
  const sql = "SELECT * FROM `db_movies`.`movies`";
  connection.execute(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "query error",
        message: `${sql}`,
      });
    }
    res.json(result);
  });
}

//Show
function show(req, res) {}

//Store
function store(req, res) {}

//Update
function update(req, res) {}

//Modify
function modify(req, res) {}

//Destroy
function destroy(req, res) {}

module.exports = { index, show, store, update, modify, destroy };

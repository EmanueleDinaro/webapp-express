const connection = require("../data/db");

//Index
function index(req, res) {
  const sql = "SELECT * FROM `movies`";
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
function show(req, res) {
  // Ottengo l'ID del film dai parametri della richiesta
  const { id } = req.params;

  // Creo la query SQL per recuperare il film
  const sql = `
    SELECT *
    FROM movies
    WHERE id = ?
    `;

  // Eseguo la query SQL e gestisco eventuali errori
  connection.execute(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "query error",
        message: `${sql}`,
      });
    }

    // Ottengo il movie dal risultato della query
    const movie = result[0];

    // Se il movie non è stato trovato, restituisco un errore 404
    if (!movie) {
      return res.status(404).json({
        error: "404 Not Found",
        message: "movie not found",
      });
    }

    // Creo la query SQL per recuperare le reviews del movie
    const reviewsSql = `
    SELECT *
    FROM reviews
    WHERE movie_id = ?
    `;

    // Eseguo la query SQL per le reviews e gestisco eventuali errori
    connection.execute(reviewsSql, [id], (err, result) => {
      if (err) {
        return res.status(500).json({
          error: "query error",
          message: `${reviewsSql}`,
        });
      }

      // Aggiungo le reviews all'oggetto movie
      movie.reviews = result;

      res.json(movie);
    });
  });
}

//Store
function store(req, res) {}

//Update
function update(req, res) {}

//Modify
function modify(req, res) {}

//Destroy
function destroy(req, res) {}

module.exports = { index, show, store, update, modify, destroy };

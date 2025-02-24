const express = require("express");
const cors = require("cors"); // Libreria CORS
const notFound = require("./middlewares/notFound"); // Middleware per gestire le req(404)
const handleErrors = require("./middlewares/handleErrors"); // Middleware per gestire gli errors(500)

const app = express();
const port = process.env.PORT;

// Router
const moviesRouter = require("./routes/moviesRouter");

// Rotte
app.use("/movies", moviesRouter);

// Middlewares
app.use(express.static("public")); // Serve per i file statici dalla cartella "public" tipo le img
app.use(express.json()); // Abilita il parsing del body della req
// Middleware per gestire gli errori 404 | 500
app.use(notFound); // Gestisce le req(404)
app.use(handleErrors); // Gestisce gli errors(500)

// Cors
app.use(
  cors({
    origin: "http://localhost:5173", // Consente le future richieste CORS dal Front-End
  })
);

// Rotta base
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

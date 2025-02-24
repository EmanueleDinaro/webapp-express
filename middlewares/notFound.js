function notFound(req, res, next) {
  return res.status(404)(
    res.json({
      error: "404 Not Found",
      message: "Elemento non è stato trovato",
    })
  );
  next();
}

module.exports = notFound;

const express = require("express");
const router = express.Router();
const moviesControllers = require("../controllers/moviesControllers");

//Index
router.get("/", moviesControllers.index);

//Show
router.get("/:id", moviesControllers.show);

//Store
router.post("/", moviesControllers.store);

//Update
router.pu("/:id", moviesControllers.update);

//Modify
router.patch("/:id", moviesControllers.modify);

//Destroy
router.delete("/:id", moviesControllers.destroy);

module.exports = router;

module.exports = app => {
    const poems = require("../controllers/poem.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", poems.create);
  
    // Retrieve all Tutorials
    router.get("/", poems.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", poems.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", poems.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", poems.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", poems.delete);
  
    // Create a new Tutorial
    router.delete("/", poems.deleteAll);
  
    app.use('/api/poems', router);
  };
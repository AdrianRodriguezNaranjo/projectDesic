module.exports = app => {
  const busline = require("../controllers/busline.controller.js");
  const auth = require("../controllers/auth.js");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new busline
  router.post("/", upload.single('file'), busline.create);
  router.post("/", busline.create);

  // Retrieve all buslines
  router.get("/", busline.findAll);

  // Retrieve a single busline with id
  router.get("/:id", busline.findOne);

  // Update a busline with id
  router.put("/:id", upload.single('file'), (req, res) => {
    if (req.file) {
      // Handle updating with an image
      busline.update(req, res);
    } else {
      // Handle updating without an image
      busline.update2(req, res);
    }
  });

  // Delete a busline with id
  router.delete("/:id", busline.delete);

  app.use('/api/buslines', router);
};
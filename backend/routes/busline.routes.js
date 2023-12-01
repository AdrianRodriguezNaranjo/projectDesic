module.exports = app => {
  const busline = require("../controllers/busline.controller.js");
  const lineschedule = require("../controllers/lineschedule.controller.js");
  const auth = require("../controllers/auth.js");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new busline
  router.post("/", auth.isAuthenticated, upload.single('file'), busline.create);
  router.post("/", auth.isAuthenticated, busline.create);

  // Retrieve all buslines
  router.get("/", auth.isAuthenticated, busline.findAll);

  // Retrieve a single busline with id
  router.get("/:id", auth.isAuthenticated, busline.findOne);

  router.get("/:buslineId/schedule", auth.isAuthenticated, lineschedule.getLineSchedule);
  router.post("/:buslineId/schedule", auth.isAuthenticated, lineschedule.addLineSchedule);

  // Update a busline with id
  router.put("/:id", auth.isAuthenticated, upload.single('file'), (req, res) => {
    if (req.file) {
      // Handle updating with an image
      busline.update(req, res);
    } else {
      // Handle updating without an image
      busline.update2(req, res);
    }
  });

  // Delete a busline with id
  router.delete("/:id", auth.isAuthenticated, busline.delete);

  app.use('/api/buslines', router);
};
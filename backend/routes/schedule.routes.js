module.exports = app => {
    const schedule = require("../controllers/schedule.controller.js");
    const auth = require("../controllers/auth.js");
    var upload = require('../multer/upload');

    var router = require("express").Router();

    router.post("/", schedule.create);

    router.get("/", schedule.findAll);

    router.get("/:id", schedule.findOne);

    router.put("/:id", schedule.update);

    router.delete("/:id", schedule.delete);

    app.use('/api/schedule', router);
};
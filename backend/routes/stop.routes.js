module.exports = app => {
    const stop = require("../controllers/stop.controller.js");
    const auth = require("../controllers/auth.js");

    var router = require("express").Router();

    router.post("/", stop.create);

    router.get("/", stop.findAll);

    router.get("/:id", stop.findOne);

    router.put("/:id", stop.update);

    router.delete("/:id", stop.delete);

    app.use('/api/stop', router);
};
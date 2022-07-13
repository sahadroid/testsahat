module.exports = app => {
    const controllers = require("../controllers/controller.js");
    var router = require("express").Router();

    router.get("/testone", controllers.testone);
    router.get("/testtwo", controllers.testtwo);
    
    app.use('/api', router);
  };
module.exports = app => {
    const reservations = require("../controllers/reservation.controller.js");
  
    var router = require("express").Router();
  
    // Crear una nueva reserva
    router.post("/", reservations.create);
  
    app.use('/api/reservations', router);
  };
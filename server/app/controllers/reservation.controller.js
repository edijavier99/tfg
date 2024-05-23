const db = require("../models");
const Reservation = db.reservation;

exports.create = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.date || !req.body.time || !req.body.guests) {
    res.status(400).send({
      message: "El contenido no puede estar vacío!"
    });
    return;
  }

  const reservation = {
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    time: req.body.time,
    guests: req.body.guests
  };

  Reservation.create(reservation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear la reserva."
      });
    });
};
const db = require("../models");
const Stop = db.stop;
const Op = db.Sequelize.Op;
const utils = require("../utils");

// Create and Save a stop bus
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.name) {
  //   return res.status(400).send({
  //     message: "Content cannot be empty!"
  //   });
  // }

  // Create a stop
  const stop = {
    id: req.body.id,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    name: req.body.name
  }

  // Save stop in the database
  Stop.create(stop).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the stop"
    })
  });
};

// Retrieve all stops from the database.
exports.findAll = (req, res) => {
    Stop.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Stop"
    })
  })
};

// Find a single stop with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stop.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `stop with id=${id} was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving stop with id=" + id
      });
    });
}

// Update a stop by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  const stop = {
    id: req.body.id,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    name: req.body.name
  }

  Stop.update(stop, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send(num);
      } else {
        res.status(404).send({
          message: `Cannot update stop with id=${id}. Maybe stop was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not update stop with id=" + id
      });
    });
};

// Delete a stop with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Stop.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "stop was deleted successfully." });
      } else {
        res.status(404).send({
          message: `Cannot delete stop with id=${id}. Maybe stop was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete stop with id=" + id
      });
    });
};
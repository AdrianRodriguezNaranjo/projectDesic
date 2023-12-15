const db = require("../models");
const Busline = db.busline;
const Op = db.Sequelize.Op;
const utils = require("../utils");

// Create and Save a busline
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.name) {
  //   return res.status(400).send({
  //     message: "Content cannot be empty!"
  //   });
  // }

  // Create a busline
  const busline = {
    id: req.body.id,
    direction: req.body.direction,
    startstop: req.body.startstop,
    finalstop: req.body.finalstop,
    filename: req.file ? req.file.filename : ""
  }

  // Save busline in the database
  Busline.create(busline).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the busline"
    })
  });
};

// Retrieve all buslines from the database.
exports.findAll = (req, res) => {
  Busline.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all buslines"
    })
  })
};

// Find a single busline with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Busline.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Busline with id=${id} was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Manga with id=" + id
      });
    });
}

// Update a busline by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  const busline = {
    id: req.body.id,
    direction: req.body.direction,
    startStop: req.body.startStop,
    finalStop: req.body.finalStop,
    filename: req.file ? req.file.filename : ""
  }

  Busline.update(busline, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send(num);
      } else {
        res.status(404).send({
          message: `Cannot update Busline with id=${id}. Maybe Busline was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not update Busline with id=" + id
      });
    });
};

// Update a busline by the id in the request without updating a image
exports.update2 = (req, res) => {
  const id = req.params.id;

  Busline.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send(num);
      } else {
        res.status(404).send({
          message: `Cannot update Busline with id=${id}. Maybe Busline was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not update Busline with id=" + id
      });
    });
};

// Delete a busline with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Busline.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Busline was deleted successfully." });
      } else {
        res.status(404).send({
          message: `Cannot delete Busline with id=${id}. Maybe Busline was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Busline with id=" + id
      });
    });
};
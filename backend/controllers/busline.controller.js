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
    startStop: req.body.startStop,
    finalStop: req.body.finalStop,
    listStop: req.body.listStop,
    filename: req.file ? req.file.filename : ""
  }

  // Save Manga in the database
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
  Manga.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Mangas"
    })
  })
};

// Find a single manga with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Manga.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Manga with id=${id} was not found.`
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

  const manga = {
    id: req.body.id,
    name: req.body.name,
    synopsis: req.body.synopsis,
    chapter: req.body.chapter,
    filename: req.file ? req.file.filename : ""
  }

  Manga.update(manga, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send(num);
      } else {
        res.status(404).send({
          message: `Cannot update Manga with id=${id}. Maybe Manga was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not update Manga with id=" + id
      });
    });
};

// Update a busline by the id in the request without updating a image
exports.update2 = (req, res) => {
  const id = req.params.id;

  Manga.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send(num);
      } else {
        res.status(404).send({
          message: `Cannot update Manga with id=${id}. Maybe Manga was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not update Manga with id=" + id
      });
    });
};

// Delete a busline with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Manga.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Manga was deleted successfully." });
      } else {
        res.status(404).send({
          message: `Cannot delete Manga with id=${id}. Maybe Manga was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Manga with id=" + id
      });
    });
};
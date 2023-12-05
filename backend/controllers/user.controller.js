const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const utils = require("../utils");
const bcrypt = require('bcryptjs');

// Create and Save a new User
exports.create = (req, res) => {
  //Validate request
  if (!req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User
  let user = {
    password: req.body.password,
    username: req.body.username,
    email: req.body.email,
    isAdmin: req.body.isAdmin ? req.body.isAdmin : false
  };

  User.findOne({ where: { username: user.username } })
    .then(data => {
      if (data) {
        const result = bcrypt.compareSync(user.password, data.password);
        if (!result) return res.status(401).send('Password not valid!');
        const token = utils.generateToken(data);
        // get basic user details
        const userObj = utils.getCleanUser(data);
        // return the token along with user details
        return res.json({ user: userObj, access_token: token });
      }

      user.password = bcrypt.hashSync(req.body.password);

      // User not found. Save new User in the database
      User.create(user)
        .then(data => {
          const token = utils.generateToken(data);
          // get basic user details
          const userObj = utils.getCleanUser(data);
          // return the token along with user details
          return res.json({ user: userObj, access_token: token });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {

  User.findAll({ attributes: { exclude: ['password'] } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id, { attributes: { exclude: ['password'] } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a User by the id in the request
// const encryptPassword =  bcrypt.hashSync(req.body.password);
exports.update = (req, res) => {
  const id = req.params.id;

  if (req.body.password) {
    // Encriptar la nueva contraseña
    const encryptedPassword = bcrypt.hashSync(req.body.password);
    // Reemplazar la contraseña sin encriptar con la encriptada en el objeto req.body
    req.body.password = encryptedPassword;
  }

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// // Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Find user by email and password
exports.findUserByEmailAndPassword = (req, res) => {
  const email = req.body.email;
  const pwd = req.body.password;

  User.findOne({ where: { email: email, password: pwd } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
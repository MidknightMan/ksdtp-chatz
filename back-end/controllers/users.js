const { fetchAllUsers, postUser, patchUser } = require('../models/users');

exports.getUsers = (req, res, next) => {
  fetchAllUsers()
    .then(users => res.status(200).send({ users }))
    .catch(next);
};

exports.addUser = (req, res, next) => {
  const newUser = req.body;
  postUser(newUser)
    .then(postedUser => res.status(201).send(postedUser))
    .catch(next);
};

exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  patchUser(id, body)
    .then(updatedUser => {
      res.status(200).send(updatedUser);
    })
    .catch(next);
};

const usersRouter = require('express').Router();
const { getUsers, addUser, updateUser } = require('../controllers/users');

usersRouter
  .route('/')
  .get(getUsers)
  .post(addUser);

usersRouter.route('/:id').patch(updateUser);

module.exports = usersRouter;

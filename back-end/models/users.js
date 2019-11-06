const knex = require('../connection');

exports.fetchAllUsers = () => {
  return knex('users').select('*');
};

exports.postUser = newUser => {
  return knex
    .insert(newUser)
    .into('users')
    .returning('*')
    .then(postedUser => {
      return { postedUser };
    });
};

exports.patchUser = (id, body) => {
  console.log(body);
  const { username, avatar_url } = body;

  return knex('users')
    .where({ user_id: id })
    .update({ username: username, avatar_url: avatar_url })
    .returning('*')
    .then(updatedUser => {
      return { updatedUser };
    });
};

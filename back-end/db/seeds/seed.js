const { userData } = require('../data/index.js');

exports.seed = function(knex) {
  const usersInsertions = knex('users').insert(userData);
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return usersInsertions;
    });
};

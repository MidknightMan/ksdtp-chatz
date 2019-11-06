exports.up = function(knex) {
  return knex.schema.createTable('users', usersTable => {
    usersTable.increments('user_id');
    usersTable.string('username');
    usersTable.string('avatar_url');
    usersTable.timestamp('last_login');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};

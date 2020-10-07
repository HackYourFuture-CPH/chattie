exports.up = function (knex) {
  return knex.schema.table('users', (table) => {
    table.string('uid').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('uid');
  });
};

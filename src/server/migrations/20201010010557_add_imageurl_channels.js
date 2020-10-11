exports.up = function(knex) {
  return knex.schema.table('channels', (table) => {
    table.string('imageUrl');
  });
};

exports.down = function(knex) {
  return knex.schema.table('channels', (table) => {
    table.dropColumn('imageUrl');
  });
};

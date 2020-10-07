exports.up = function (knex) {
  return knex.schema.createTable('notifications', (table) => {
    table.increments();
    table.integer('fk_user_id').unsigned();
    table.foreign('fk_user_id').references('users.id');
    table.string('message').notNullable();
    table.boolean('has_been_read').notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('notifications');
};

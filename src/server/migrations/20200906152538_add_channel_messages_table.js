exports.up = function (knex) {
  return knex.schema.createTable('channel_messages', (table) => {
    table.increments();
    table.string('message');
    table.integer('fk_channel_id').unsigned();
    table.foreign('fk_channel_id').references('channels.id');
    table.integer('fk_user_id').unsigned();
    table.foreign('fk_user_id').references('users.id');
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('channel_messages');
};

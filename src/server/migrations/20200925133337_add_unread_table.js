exports.up = function(knex) {
  return knex.schema.createTable('unread_messages', (table) => {
    table.increments();
    table.tinyint('unread');
    table.integer('fk_user_id').unsigned();
    table.foreign('fk_user_id').references('users.id');
    table.integer('fk_message_id').unsigned();
    table.foreign('fk_message_id').references('channel_messages.id');
    table.integer('fk_channel_id').unsigned();
    table.foreign('fk_channel_id').references('channels.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('unread_messages');
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('unread_messages')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('unread_messages').insert([
        {
          id: 1,
          unread: 1,
          fk_user_id: 1,
          fk_channel_id: 2,
        },
        {
          id: 2,
          unread: 1,
          fk_user_id: 1,
          fk_channel_id: 2,
        },
        {
          id: 3,
          unread: 1,
          fk_user_id: 4,
          fk_channel_id: 1,
        },
        {
          id: 4,
          unread: 1,
          fk_user_id: 4,
          fk_channel_id: 1,
        },
        {
          id: 5,
          unread: 1,
          fk_user_id: 5,
          fk_channel_id: 3,
        },
        {
          id: 6,
          unread: 1,
          fk_user_id: 5,
          fk_channel_id: 3,
        },
        {
          id: 7,
          unread: 1,
          fk_user_id: 7,
          fk_channel_id: 4,
        },
        {
          id: 8,
          unread: 1,
          fk_user_id: 8,
          fk_channel_id: 5,
        },
        {
          id: 9,
          unread: 1,
          fk_user_id: 9,
          fk_channel_id: 5,
        },
        {
          id: 10,
          unread: 1,
          fk_user_id: 10,
          fk_channel_id: 3,
        },
      ]);
    });
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('channel_messages')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('channel_messages').insert([
        {
          id: 1,
          message: 'Hello there!',
          fk_channel_id: 2,
          fk_user_id: 1,
          created_at: '2020-10-01 12:00:00',
          updated_at: '2020-10-01 12:00:00',
          deleted_at: '2020-10-01 12:00:00',
        },
        {
          id: 2,
          message: 'Love For All, Hatred For None',
          fk_channel_id: 2,
          fk_user_id: 2,
          created_at: '2020-10-01 12:10:00',
          updated_at: '2020-10-01 12:10:00',
          deleted_at: '2020-10-01 12:10:00',
        },
        {
          id: 3,
          message: 'Change the world by being yourself',
          fk_channel_id: 5,
          fk_user_id: 3,
          created_at: '2020-10-01 12:20:00',
          updated_at: '2020-10-01 12:20:00',
          deleted_at: '2020-10-01 12:20:00',
        },
        {
          id: 4,
          message: 'Every moment is a fresh beginning.',
          fk_channel_id: 1,
          fk_user_id: 4,
          created_at: '2020-10-01 12:30:00',
          updated_at: '2020-10-01 12:30:00',
          deleted_at: '2020-10-01 12:30:00',
        },
        {
          id: 5,
          message: 'Never regret anything that made you smile.',
          fk_channel_id: 6,
          fk_user_id: 5,
          created_at: '2020-10-02 12:20:00',
          updated_at: '2020-10-02 12:20:00',
          deleted_at: '2020-10-02 12:20:00',
        },
        {
          id: 6,
          message: 'Die with memories, not dreams.',
          fk_channel_id: 6,
          fk_user_id: 6,
          created_at: '2020-10-10 05:20:00',
          updated_at: '2020-10-10 05:20:00',
          deleted_at: '2020-10-10 05:20:00',
        },
        {
          id: 7,
          message: 'Aspire to inspire before we expire.',
          fk_channel_id: 7,
          fk_user_id: 7,
          created_at: '2020-10-10 10:00:00',
          updated_at: '2020-10-10 10:00:00',
          deleted_at: '2020-10-10 10:00:00',
        },
        {
          id: 8,
          message: 'Everything you can imagine is real.',
          fk_channel_id: 8,
          fk_user_id: 8,
          created_at: '2020-10-10 11:20:00',
          updated_at: '2020-10-10 11:20:00',
          deleted_at: '2020-10-10 11:20:00',
        },
        {
          id: 9,
          message: 'Simplicity is the ultimate sophistication.',
          fk_channel_id: 9,
          fk_user_id: 9,
          created_at: '2020-10-10 11:30:00',
          updated_at: '2020-10-10 11:30:00',
          deleted_at: '2020-10-10 11:30:00',
        },
        {
          id: 10,
          message: 'Whatever you do, do it well.',
          fk_channel_id: 9,
          fk_user_id: 10,
          created_at: '2020-10-10 11:59:00',
          updated_at: '2020-10-10 11:59:00',
          deleted_at: '2020-10-10 11:59:00',
        },
      ]);
    });
};

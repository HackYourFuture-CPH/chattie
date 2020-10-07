exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('channel_members')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('channel_members').insert([
        {
          id: 1,
          fk_channel_id: 2,
          fk_user_id: 1,
          created_at: '2020-10-01 12:00:00',
          updated_at: '2020-10-01 12:00:00',
          deleted_at: '2020-10-01 12:00:00',
        },
        {
          id: 2,
          fk_channel_id: 2,
          fk_user_id: 2,
          created_at: '2020-10-01 12:10:00',
          updated_at: '2020-10-01 12:10:00',
          deleted_at: '2020-10-01 12:10:00',
        },
        {
          id: 3,
          fk_channel_id: 5,
          fk_user_id: 3,
          created_at: '2020-10-01 12:20:00',
          updated_at: '2020-10-01 12:20:00',
          deleted_at: '2020-10-01 12:20:00',
        },
        {
          id: 4,
          fk_channel_id: 1,
          fk_user_id: 4,
          created_at: '2020-10-01 12:30:00',
          updated_at: '2020-10-01 12:30:00',
          deleted_at: '2020-10-01 12:30:00',
        },
        {
          id: 5,
          fk_channel_id: 6,
          fk_user_id: 5,
          created_at: '2020-10-02 12:20:00',
          updated_at: '2020-10-02 12:20:00',
          deleted_at: '2020-10-02 12:20:00',
        },
        {
          id: 6,
          fk_channel_id: 6,
          fk_user_id: 6,
          created_at: '2020-10-10 05:20:00',
          updated_at: '2020-10-10 05:20:00',
          deleted_at: '2020-10-10 05:20:00',
        },
        {
          id: 7,
          fk_channel_id: 7,
          fk_user_id: 7,
          created_at: '2020-10-10 10:00:00',
          updated_at: '2020-10-10 10:00:00',
          deleted_at: '2020-10-10 10:00:00',
        },
        {
          id: 8,
          fk_channel_id: 8,
          fk_user_id: 8,
          created_at: '2020-10-10 11:20:00',
          updated_at: '2020-10-10 11:20:00',
          deleted_at: '2020-10-10 11:20:00',
        },
        {
          id: 9,
          fk_channel_id: 9,
          fk_user_id: 9,
          created_at: '2020-10-10 11:30:00',
          updated_at: '2020-10-10 11:30:00',
          deleted_at: '2020-10-10 11:30:00',
        },
        {
          id: 10,
          fk_channel_id: 9,
          fk_user_id: 10,
          created_at: '2020-10-10 11:59:00',
          updated_at: '2020-10-10 11:59:00',
          deleted_at: '2020-10-10 11:59:00',
        },
      ]);
    });
};

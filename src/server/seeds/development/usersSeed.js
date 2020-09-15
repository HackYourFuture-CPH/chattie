exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          user_name: 'benna105',
          email: 'bn@anna.co',
          profileImage: 'user1.avatar_url',
          last_seen: '2020-09-15 13:00:00'
          created_at: '2020-09-01 00:00:00',
          updated_at: '2020-09-10 00:00:00',
          deleted_at: null,
        },
        {
          id: 2,
          user_name: 'charlie123',
          email: 'cl@anna.co',
          last_seen: '2020-09-15 13:00:00'
          profileImage: 'user2.avatar_url',
          created_at: '2020-09-20 00:00:00',
          updated_at: '2020-09-10 00:00:00',
          deleted_at: null,
        },
      ]);
    });
};

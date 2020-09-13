exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('channels')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('channels').insert([
        {
          id: 1,
          title: 'Charles',
          created_at: '2020-10-01 12:00:00',
          updated_at: '2020-10-01 12:00:00',
          deleted_at: '2020-10-01 12:00:00',
        },
        {
          id: 2,
          title: ' Khalifatul Masih',
          created_at: '2020-10-01 12:10:00',
          updated_at: '2020-10-01 12:10:00',
          deleted_at: '2020-10-01 12:10:00',
        },
        {
          id: 3,
          title: 'Amy Poehler',
          created_at: '2020-10-01 12:20:00',
          updated_at: '2020-10-01 12:20:00',
          deleted_at: '2020-10-01 12:20:00',
        },
        {
          id: 4,
          title: 'T.S Eliot',
          created_at: '2020-10-01 12:30:00',
          updated_at: '2020-10-01 12:30:00',
          deleted_at: '2020-10-01 12:30:00',
        },
        {
          id: 5,
          title: 'Mark Twain',
          created_at: '2020-10-02 12:20:00',
          updated_at: '2020-10-02 12:20:00',
          deleted_at: '2020-10-02 12:20:00',
        },
        {
          id: 6,
          title: 'Sky',
          created_at: '2020-10-10 05:20:00',
          updated_at: '2020-10-10 05:20:00',
          deleted_at: '2020-10-10 05:20:00',
        },
        {
          id: 7,
          title: 'Unknown1',
          created_at: '2020-10-10 10:00:00',
          updated_at: '2020-10-10 10:00:00',
          deleted_at: '2020-10-10 10:00:00',
        },
        {
          id: 8,
          title: 'Pablo Picasso',
          created_at: '2020-10-10 11:20:00',
          updated_at: '2020-10-10 11:20:00',
          deleted_at: '2020-10-10 11:20:00',
        },
        {
          id: 9,
          title: 'Leonardo da Vinci',
          created_at: '2020-10-10 11:30:00',
          updated_at: '2020-10-10 11:30:00',
          deleted_at: '2020-10-10 11:30:00',
        },
        {
          id: 10,
          title: 'Walt Disney',
          created_at: '2020-10-10 11:59:00',
          updated_at: '2020-10-10 11:59:00',
          deleted_at: '2020-10-10 11:59:00',
        },
      ]);
    });
};

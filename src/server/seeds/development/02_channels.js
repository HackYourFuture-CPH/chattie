exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('channels')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('channels').insert([
        {
          id: 1,
          title: 'Front Desk',
          created_at: '2020-10-01 12:00:00',
          updated_at: '2020-10-01 12:00:00',
          deleted_at: '2020-10-01 12:00:00',
        },
        {
          id: 2,
          title: ' kitchen',
          created_at: '2020-10-01 12:10:00',
          updated_at: '2020-10-01 12:10:00',
          deleted_at: '2020-10-01 12:10:00',
        },
        {
          id: 3,
          title: null,
          created_at: '2020-10-01 12:20:00',
          updated_at: '2020-10-01 12:20:00',
          deleted_at: '2020-10-01 12:20:00',
        },
        {
          id: 4,
          title: 'Hotels',
          created_at: '2020-10-01 12:30:00',
          updated_at: '2020-10-01 12:30:00',
          deleted_at: '2020-10-01 12:30:00',
        },
        {
          id: 5,
          title: 'Employees',
          created_at: '2020-10-02 12:20:00',
          updated_at: '2020-10-02 12:20:00',
          deleted_at: '2020-10-02 12:20:00',
        },
        {
          id: 6,
          title: null,
          created_at: '2020-10-10 05:20:00',
          updated_at: '2020-10-10 05:20:00',
          deleted_at: '2020-10-10 05:20:00',
        },
        {
          id: 7,
          title: 'Forms',
          created_at: '2020-10-10 10:00:00',
          updated_at: '2020-10-10 10:00:00',
          deleted_at: '2020-10-10 10:00:00',
        },
        {
          id: 8,
          title: 'Advertisement',
          created_at: '2020-10-10 11:20:00',
          updated_at: '2020-10-10 11:20:00',
          deleted_at: '2020-10-10 11:20:00',
        },
        {
          id: 9,
          title: null,
          created_at: '2020-10-10 11:30:00',
          updated_at: '2020-10-10 11:30:00',
          deleted_at: '2020-10-10 11:30:00',
        },
        {
          id: 10,
          title: 'Applications',
          created_at: '2020-10-10 11:59:00',
          updated_at: '2020-10-10 11:59:00',
          deleted_at: '2020-10-10 11:59:00',
        },
      ]);
    });
};

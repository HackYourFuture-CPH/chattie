
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('channels').del()
    .then(function () {
      // Inserts seed entries
      return knex('channels').insert([
        {id: 1,
          title: 'Kichen',
          created_at: '2020-05-10 00:00:00',
          updated_at: '2020-05-10 00:00:00',
          deleted_at:null},
        {id: 2,
          title: 'Bar',
          created_at: '2020-05-07 00:00:00',
          updated_at: '2020-05-08 00:00:00',
          deleted_at:null,} 
      ]);
    });
};

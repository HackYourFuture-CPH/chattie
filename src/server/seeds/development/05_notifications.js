
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('notifications').insert([
          {
            id: 1,
            fk_user_id: 1,
            message:'You have sucessfully signed up',
            has_been_read:true,
            created_at: '2020-10-01 12:00:00',
            updated_at: '2020-10-01 12:00:00',
            deleted_at: '2020-10-01 12:00:00',
          },
          {
            id: 2,
            fk_user_id: 2,
            message: 'You have 5 unread messages',
            has_been_read:false,
            created_at: '2020-10-01 12:10:00',
            updated_at: '2020-10-01 12:10:00',
            deleted_at: '2020-10-01 12:10:00',
          },
          {
            id: 3,
            fk_user_id: 3,
            message:'You have successfully updated name',
            has_been_read:false,
            created_at: '2020-10-01 12:00:00',
            updated_at: '2020-10-01 12:00:00',
            deleted_at: '2020-10-01 12:10:00',
          },
          {
            id: 4,
            fk_user_id: 4,
            message: 'you have 2 unread messages',
            has_been_read:false,
            created_at: '2020-10-01 12:10:00',
            updated_at: '2020-10-01 12:10:00',
            deleted_at: '2020-10-01 12:10:00',
          },
          {
            id: 5,
            fk_user_id: 5,
            message:'you have successfully updated your phone number',
            has_been_read:true,
            created_at: '2020-10-01 12:10:00',
            updated_at: '2020-10-01 12:10:00',
            deleted_at: '2020-10-01 12:10:00',
          },
          {
            id: 6,
            fk_user_id: 6,
            message:'you have 3 unread messages',
            has_been_read:false,
            created_at: '2020-10-01 12:10:00',
            updated_at: '2020-10-01 12:10:00',
            deleted_at: '2020-10-01 12:10:00',
          }
      ]);
    });
};

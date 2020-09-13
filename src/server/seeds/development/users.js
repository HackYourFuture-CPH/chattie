exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          profile_image: 'image1',
          user_name: 'Peter',
          email: 'peter123@gmail.com',
          last_seen: '2020-09-10 03:15:25',
        },
        {
          id: 2,
          profile_image: 'image2',
          user_name: 'Lena',
          email: 'lenaS@example.com',
          last_seen: '2020-08-19 22:15:56',
        },
        {
          id: 3,
          profile_image: 'image3',
          user_name: 'Sharron',
          email: 'sharron@gmail.com',
          last_seen: '2019-06-05 18:09:22',
        },
        {
          id: 4,
          profile_image: 'image4',
          user_name: 'Dublin',
          email: 'dublin@yahoo.com',
          last_seen: '2019-11-25 16:05:07',
        },
        {
          id: 5,
          profile_image: 'image5',
          user_name: 'Mia',
          email: 'mia123@example.com',
          last_seen: '2020-05-05 09:04:22',
        },
        {
          id: 6,
          profile_image: 'image6',
          user_name: 'Bret',
          email: 'bretB@yahoo.com',
          last_seen: '2019-10-17 13:52:34',
        },
        {
          id: 7,
          profile_image: 'image7',
          user_name: 'Mark',
          email: 'mark04@gmail.com',
          last_seen: '2020-07-18 15:32:42',
        },
        {
          id: 8,
          profile_image: 'image8',
          user_name: 'Micheal',
          email: 'mickJ@example.com',
          last_seen: '2019-09-24 23:43:11',
        },
        {
          id: 9,
          profile_image: 'image9',
          user_name: 'Britney',
          email: 'brit_09@yahoo.com',
          last_seen: '2019-02-13 16:51:19',
        },
        {
          id: 10,
          profile_image: 'image10',
          user_name: 'Paul',
          email: 's_paul@example.com',
          last_seen: '2020-07-04 18:29:32',
        },
      ]);
    });
};

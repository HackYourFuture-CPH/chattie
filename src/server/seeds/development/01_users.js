exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          profile_image:
            'https://www.freedigitalphotos.net/images/category-images/118.jpg',
          user_name: 'Peter',
          email: 'peter123@gmail.com',
          last_seen: '2020-10-01 12:00:00',
          created_at: '2020-10-01 12:00:00',
          updated_at: '2020-10-01 12:00:00',
          uid: 'something',
        },
        {
          id: 2,
          profile_image:
            'https://images.freeimages.com/images/small-previews/a1d/face-1-1433303.jpg',
          user_name: 'Lena',
          email: 'lenaS@example.com',
          last_seen: '2020-10-01 12:10:00',
          created_at: '2020-10-01 12:10:00',
          updated_at: '2020-10-01 12:10:00',
          uid: 'something',
        },
        {
          id: 3,
          profile_image:
            'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg',
          user_name: 'Sharron',
          email: 'sharron@gmail.com',
          last_seen: '2020-10-01 12:20:00',
          created_at: '2020-10-01 12:20:00',
          updated_at: '2020-10-01 12:20:00',
          uid: 'something',
        },
        {
          id: 4,
          profile_image:
            'https://i.pinimg.com/280x280_RS/3f/07/dd/3f07ddf00381953d87cb6afab53dfec8.jpg',
          user_name: 'Dublin',
          email: 'dublin@yahoo.com',
          last_seen: '2020-10-01 12:30:00',
          created_at: '2020-10-01 12:30:00',
          updated_at: '2020-10-01 12:30:00',
          uid: 'something',
        },
        {
          id: 5,
          profile_image:
            'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg',
          user_name: 'Mia',
          email: 'mia123@example.com',
          last_seen: '2020-10-02 12:20:00',
          created_at: '2020-10-02 12:20:00',
          updated_at: '2020-10-02 12:20:00',
          uid: 'something',
        },
        {
          id: 6,
          profile_image:
            'https://images.unsplash.com/photo-1441786485319-5e0f0c092803?ixlib=rb-1.2.1&w=1000&q=80',
          user_name: 'Bret',
          email: 'bretB@yahoo.com',
          last_seen: '2020-10-10 05:20:00',
          created_at: '2020-10-10 05:20:00',
          updated_at: '2020-10-10 05:20:00',
          uid: 'something',
        },
        {
          id: 7,
          profile_image:
            'https://generated.photos/vue-static/home/feed/latino-male.png',
          user_name: 'Mark',
          email: 'mark04@gmail.com',
          last_seen: '2020-10-10 10:00:00',
          created_at: '2020-10-10 10:00:00',
          updated_at: '2020-10-10 10:00:00',
          uid: 'something',
        },
        {
          id: 8,
          profile_image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          user_name: 'Micheal',
          email: 'mickJ@example.com',
          last_seen: '2020-10-10 11:20:00',
          created_at: '2020-10-10 11:20:00',
          updated_at: '2020-10-10 11:20:00',
          uid: 'something',
        },
        {
          id: 9,
          profile_image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW-5IA2xp7hnT1FPlBRNs56EqbjEVcNHoGww&usqp=CAU',
          user_name: 'Britney',
          email: 'brit_09@yahoo.com',
          last_seen: '2020-10-10 11:30:00',
          created_at: '2020-10-10 11:30:00',
          updated_at: '2020-10-10 11:30:00',
          uid: 'something',
        },
        {
          id: 10,
          profile_image:
            'https://generated.photos/vue-static/home/feed/adult.png',
          user_name: 'Paul',
          email: 's_paul@example.com',
          last_seen: '2020-10-10 11:30:00',
          created_at: '2020-10-10 11:30:00',
          updated_at: '2020-10-10 11:30:00',
          deleted_at: '2020-10-10 11:30:00',
          uid: 'something',
        },
      ]);
    });
};

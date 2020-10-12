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
          last_seen: '2020-09-10 03:15:25',
          uid: 'uid',
          phone_number: '+45 31823401',
          role: 'Chef',
        },
        {
          id: 2,
          profile_image:
            'https://images.freeimages.com/images/small-previews/a1d/face-1-1433303.jpg',
          user_name: 'Lena',
          email: 'lenaS@example.com',
          last_seen: '2020-08-19 22:15:56',
          uid: 'uid',
          phone_number: '+45 31823402',
          role: 'Kitchen assistent',
        },
        {
          id: 3,
          profile_image:
            'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg',
          user_name: 'Sharron',
          email: 'sharron@gmail.com',
          last_seen: '2019-06-05 18:09:22',
          uid: 'uid',
          phone_number: '+45 31823403',
          role: 'Kitchen assistent',
        },
        {
          id: 4,
          profile_image:
            'https://i.pinimg.com/280x280_RS/3f/07/dd/3f07ddf00381953d87cb6afab53dfec8.jpg',
          user_name: 'Dublin',
          email: 'dublin@yahoo.com',
          last_seen: '2019-11-25 16:05:07',
          uid: 'uid',
          phone_number: '+45 31823404',
          role: 'FoH Manager',
        },
        {
          id: 5,
          profile_image:
            'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg',
          user_name: 'Mia',
          email: 'mia123@example.com',
          last_seen: '2020-05-05 09:04:22',
          uid: 'uid',
          phone_number: '+45 31823405',
          role: 'BoH Manager',
        },
        {
          id: 6,
          profile_image:
            'https://images.unsplash.com/photo-1441786485319-5e0f0c092803?ixlib=rb-1.2.1&w=1000&q=80',
          user_name: 'Bret',
          email: 'bretB@yahoo.com',
          last_seen: '2019-10-17 13:52:34',
          uid: 'uid',
          phone_number: '+45 31823406',
          role: 'Waiter',
        },
        {
          id: 7,
          profile_image:
            'https://generated.photos/vue-static/home/feed/latino-male.png',
          user_name: 'Mark',
          email: 'mark04@gmail.com',
          last_seen: '2020-07-18 15:32:42',
          uid: 'uid',
          phone_number: '+45 31823407',
          role: 'Waiter',
        },
        {
          id: 8,
          profile_image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          user_name: 'Micheal',
          email: 'mickJ@example.com',
          last_seen: '2019-09-24 23:43:11',
          uid: 'uid',
          phone_number: '+45 31823408',
          role: 'Chef',
        },
        {
          id: 9,
          profile_image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW-5IA2xp7hnT1FPlBRNs56EqbjEVcNHoGww&usqp=CAU',
          user_name: 'Britney',
          email: 'brit_09@yahoo.com',
          last_seen: '2019-02-13 16:51:19',
          uid: 'uid',
          phone_number: '+45 31823409',
          role: 'Waitress',
        },
        {
          id: 10,
          profile_image:
            'https://generated.photos/vue-static/home/feed/adult.png',
          user_name: 'Paul',
          email: 's_paul@example.com',
          last_seen: '2020-07-04 18:29:32',
          uid: 'uid',
          phone_number: '+45 31823410',
          role: 'Cleaner',
        },

        {
          id: 11,
          profile_image:
            'https://generated.photos/vue-static/home/feed/adult.png',
          user_name: 'User2',
          email: 'test-user2@testdomain.com',
          last_seen: '2020-07-04 18:29:32',
          uid: 'tDvqdXBZHPRogo6odUgb6oYKr3A3',
          phone_number: '+45 31823411',
          role: 'Tester',
        },
        {
          id: 12,
          profile_image:
            'https://generated.photos/vue-static/home/feed/adult.png',
          user_name: 'User1',
          email: 'test-user1@testdomain.com',
          last_seen: '2020-07-04 18:29:32',
          uid: 'qb8luwV7Z8gRz2IP7MjnQ0hTL9E3',
          phone_number: '+45 31823412',
          role: 'Tester',
        },
      ]);
    });
};

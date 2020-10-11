exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('channels')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('channels').insert([
        {
          id: 1,
          title: 'Kitchen',
          created_at: '2020-10-01 12:00:00',
          updated_at: '2020-10-01 12:00:00',
          deleted_at: '2020-10-01 12:00:00',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/c/c5/Kitchen_jantje_zag_eens_pruimen_hangen.jpg',
        },
        {
          id: 2,
          title: 'FoH',
          created_at: '2020-10-01 12:10:00',
          updated_at: '2020-10-01 12:10:00',
          deleted_at: '2020-10-01 12:10:00',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Cyclonebill_Hvide_asparges_med_pocheret_aeggeblomme_og_skovmaerkesauce.jpg/220px-Cyclonebill_Hvide_asparges_med_pocheret_aeggeblomme_og_skovmaerkesauce.jpg',
        },
        {
          id: 3,
          title: 'Maintenance',
          created_at: '2020-10-01 12:20:00',
          updated_at: '2020-10-01 12:20:00',
          deleted_at: '2020-10-01 12:20:00',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/435px-Barbieri_-_ViaSophia25668.jpg',
        },
        {
          id: 4,
          title: 'Delivery',
          created_at: '2020-10-01 12:30:00',
          updated_at: '2020-10-01 12:30:00',
          deleted_at: '2020-10-01 12:30:00',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/UberEats_cyclist_in_Amsterdam.jpg/330px-UberEats_cyclist_in_Amsterdam.jpg',
        },
        {
          id: 5,
          title: 'null',
          created_at: '2020-10-02 12:20:00',
          updated_at: '2020-10-02 12:20:00',
          deleted_at: '2020-10-02 12:20:00',
          imageUrl: 'null',
        },
        {
          id: 6,
          title: 'null',
          created_at: '2020-10-10 05:20:00',
          updated_at: '2020-10-10 05:20:00',
          deleted_at: '2020-10-10 05:20:00',
          imageUrl: 'null',
        },
        {
          id: 7,
          title: 'Forms',
          created_at: '2020-10-10 10:00:00',
          updated_at: '2020-10-10 10:00:00',
          deleted_at: '2020-10-10 10:00:00',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Google_Forms_logo.svg',
        },
        {
          id: 8,
          title: 'Advertisement',
          created_at: '2020-10-10 11:20:00',
          updated_at: '2020-10-10 11:20:00',
          deleted_at: '2020-10-10 11:20:00',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/ADS-Logo_RGB.png/1280px-ADS-Logo_RGB.png',
        },
        {
          id: 9,
          title: null,
          created_at: '2020-10-10 11:30:00',
          updated_at: '2020-10-10 11:30:00',
          deleted_at: '2020-10-10 11:30:00',
          imageUrl: 'null',
        },
        {
          id: 10,
          title: 'Applications',
          created_at: '2020-10-10 11:59:00',
          updated_at: '2020-10-10 11:59:00',
          deleted_at: '2020-10-10 11:59:00',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Google_Forms_logo.svg',
        },
      ]);
    });
};

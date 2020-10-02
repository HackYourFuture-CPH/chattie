import React from 'react';
import RoomListOverview from './RoomListOverview';

export default { title: 'RoomListOverview' };

const roomList = [
  {
    title: 'Kitchen',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/c5/Kitchen_jantje_zag_eens_pruimen_hangen.jpg',
  },
  {
    title: 'FoH',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Cyclonebill_Hvide_asparges_med_pocheret_aeggeblomme_og_skovmaerkesauce.jpg/220px-Cyclonebill_Hvide_asparges_med_pocheret_aeggeblomme_og_skovmaerkesauce.jpg',
  },
  {
    title: 'Maintenance',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/435px-Barbieri_-_ViaSophia25668.jpg',
  },
  {
    title: 'Delivery',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/UberEats_cyclist_in_Amsterdam.jpg/330px-UberEats_cyclist_in_Amsterdam.jpg',
  },
];

export const BasicStory = () => <RoomListOverview roomList={roomList} />;

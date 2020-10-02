import React from 'react';
import RoomList from './RoomList';

export default { title: 'RoomList' };

const roomList = [
  {
    title: 'Kitchen',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/c5/Kitchen_jantje_zag_eens_pruimen_hangen.jpg',
  },
  {
    title: 'FoH',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Saganaki_at_the_Parthenon_Restaurant_in_Chicago.MOV.webm/220px--Saganaki_at_the_Parthenon_Restaurant_in_Chicago.MOV.webm.jpg',
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

export const BasicStory = () => <RoomList roomList={roomList} />;

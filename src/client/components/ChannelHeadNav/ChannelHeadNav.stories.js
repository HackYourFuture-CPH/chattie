import React from 'react';
import ChannelHeadNav from './ChannelHeadNav';
import profilPic from 'profilPic.png';

export default {
  channelName: '2ndUserName',
  urlBack: './chat',
  imgUrl: 'profilPic',
};

export const Component = () => (
  <ChannelHeadNav
    channelName="2ndUserName"
    urlBack="./chat"
    imgUrl={profilPic}
  />
);

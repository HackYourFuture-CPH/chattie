import React from 'react';
import ChannelHeadNav from './ChannelHeadNav';

export default {
  channelName: '2ndUserName',
  urlBack: './chat',
  imgUrl:
    'https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1.png',
};

export const Component = () => (
  <ChannelHeadNav
    channelName="2ndUserName"
    urlBack="./chat"
    imgUrl="https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1.png"
  />
);

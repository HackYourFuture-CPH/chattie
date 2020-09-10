import React from 'react';
import ChannelHeadNav from './ChannelHeadNav';

export default {
  channelName: '2ndUserName',
  urlBack: './chat',
  imgUrl: './s3.png',
};

export const Component = () => (
  <ChannelHeadNav
    channelName="2ndUserName"
    urlBack="./chat"
    imgUrl="./s3.png"
  />
);

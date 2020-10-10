import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RenderChannelInformation } from '../../components/ChannelInformation/ChannelInnformation';

export default function ChannelInfoRender() {
  const [channelTitle, setchannelTitle] = useState('');
  const [channelImageUrl, setchannelImageUrl] = useState('');
  const [members, setMembers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/channels/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setchannelTitle(res[0].title);
        if (res[0].url) {
          setchannelImageUrl(res[0].url);
        } else {
          setchannelImageUrl('https://loremflickr.com/320/240');
        }
      });
    fetch(`api/channel-members/${id}`)
      .then((res) => res.json())
      .then((res) => setMembers(res));
  }, [id]);

  return (
    <RenderChannelInformation
      image={channelImageUrl}
      title={channelTitle}
      members={members}
    />
  );
}

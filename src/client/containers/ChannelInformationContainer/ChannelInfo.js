import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChannelInformationComponent } from '../../components/ChannelInformation/ChannelInnformation';
import fetchWithAuth from '../../utils/fetchWithAuth';

export default function ChannelInfoRender() {
  const [channelTitle, setchannelTitle] = useState('');
  const [channelImageUrl, setchannelImageUrl] = useState('');
  const [members, setMembers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchChannelAndMembers = async () => {
      const channel = await fetchWithAuth(`/api/channels/${id}`);
      setchannelTitle(channel[0].title);
      if (channel[0].url) {
        setchannelImageUrl(channel[0].url);
      } else {
        setchannelImageUrl('https://loremflickr.com/320/240');
      }
      const membersRes = await fetchWithAuth(`api/channel-members/${id}`);
      setMembers(membersRes);
    };
    fetchChannelAndMembers();
  }, [id]);
  return (
    <ChannelInformationComponent
      image={channelImageUrl}
      title={channelTitle}
      members={members}
    />
  );
}

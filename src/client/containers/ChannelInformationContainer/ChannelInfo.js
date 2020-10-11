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
      const membersofChannel = await fetchWithAuth(`api/channel-members/${id}`);
      if (channel[0].title) {
        setchannelTitle(channel[0].title);
      } else {
        setchannelTitle(membersofChannel[0].userName);
      }
      if (channel[0].imageUrl) {
        setchannelImageUrl(channel[0].imageUrl);
      } else {
        setchannelImageUrl(membersofChannel[0].profileImage);
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

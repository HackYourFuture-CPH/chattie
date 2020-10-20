import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ChannelInformationComponent } from '../../components/ChannelInformation/ChannelInnformation';
import fetchWithAuth from '../../utils/fetchWithAuth';
import { UserContext } from '../../context/userContext';

export default function ChannelInfoRender() {
  const [channelTitle, setchannelTitle] = useState('');
  const [channelImageUrl, setchannelImageUrl] = useState('');
  const [members, setMembers] = useState([]);
  const { channelId } = useParams();
  const history = useHistory();
  const user = useContext(UserContext);
  const userId = user ? user.id : null;
  useEffect(() => {
    const fetchChannelAndMembers = async () => {
      const channel = await fetchWithAuth(`/api/channels/${channelId}`);
      const membersOfChannel = await fetchWithAuth(
        `api/channel-members/membersInfo?channelId=${channelId}`,
      );
      const notCurrentUser = membersOfChannel
        ? membersOfChannel.filter((member) => member.id !== userId)[0]
        : null;
      if (channel.title) {
        setchannelTitle(channel.title);
      } else {
        setchannelTitle(notCurrentUser.userName);
      }
      if (channel.imageUrl) {
        setchannelImageUrl(channel.imageUrl);
      } else {
        setchannelImageUrl(notCurrentUser.profileImage);
      }

      setMembers(membersOfChannel);
    };
    fetchChannelAndMembers();
  }, [channelId, userId]);

  return (
    <ChannelInformationComponent
      image={channelImageUrl}
      title={channelTitle}
      members={members}
      onGoToChatBack={(id) => history.push(`/channels/${id}`)}
      channelId={channelId}
    />
  );
}

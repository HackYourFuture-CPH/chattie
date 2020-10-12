const knex = require('../../config/db');

const getChannelsId = async (userId) => {
  try {
    const channels = await knex('channel_members')
      .select('fk_channel_id as channelId')
      .where('fk_user_id', userId);

    if (channels.length === 0) {
      return [];
    }
    const messages = await Promise.all(
      channels.map(async (element) => {
        const message = await knex('channel_messages')
          .select(
            'channel_messages.message',
            'channel_messages.updated_at as updatedAt',
            'channels.id as channelId',
            'channels.title',
            'channels.imageUrl',
            'channel_members.fk_user_id as userId',
            'users.user_name as userName',
            'users.profile_image as profileImage',
          )
          .innerJoin('channels', {
            'channel_messages.fk_channel_id': 'channels.id',
          })
          .where('channels.id', element.channelId)
          .innerJoin('channel_members', {
            'channel_messages.fk_channel_id': element.channelId,
          })
          .where('channel_members.fk_channel_id', element.channelId)
          .innerJoin('users', {
            'channel_members.fk_user_id': 'users.id',
          })
          .orderBy('channel_messages.updated_at', 'desc')
          .limit(1);
        return message;
      }),
    );
    const lastMessages = messages.map((item) => item[0]);
    lastMessages.sort(function(a, b) {
      const keyA = new Date(a.updatedAt);
      const keyB = new Date(b.updatedAt);
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    return lastMessages;
  } catch (error) {
    return error.message;
  }
};
module.exports = { getChannelsId };

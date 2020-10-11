const knex = require('../../config/db');

const Error = require('../lib/utils/http-error');

const getChannelsId = async (userId) => {
  try {
    const channels = await knex('channel_members')
      .select('fk_channel_id as channelId')
      .where('fk_user_id', userId);

    if (channels.length === 0) {
      throw new Error(`create your first conversation!`);
    }
    const messages = await Promise.all(
      channels.map(async (element) => {
        const message = await knex('channel_messages')
          .select(
            'channel_messages.message',
            'channel_messages.updated_at as updatedAt',
            'channels.id as channelId',
            'channels.title',
            'channel_members.fk_user_id as userId',
          )
          .innerJoin('channels', {
            'channel_messages.fk_channel_id': element.channelId,
          })
          .where('channels.id', element.channelId)
          .innerJoin('channel_members', {
            'channel_messages.fk_channel_id': element.channelId,
          })
          .where('channel_members.fk_channel_id', element.channelId)
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

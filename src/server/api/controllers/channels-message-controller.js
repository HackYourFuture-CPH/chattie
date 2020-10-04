const knex = require('../../config/db');

const Error = require('../lib/utils/http-error');


const getChannelsId = async (userId) => {
  try {
    const channels = await knex('channel_members')
      .select('fk_channel_id')
      .where('fk_user_id', '=', userId);
      
    if (channels.length === 0) {
      throw new Error(`create your first conversation!`);
    }
    const messages = await Promise.all(
      channels.map(async (element) => {
        const message = await knex('channel_messages')
          .select('message','channel_messages.updated_at', 'channel_messages.fk_channel_id', 'title')
          .innerJoin(
            'channels',
            'channels.id',
            '=',
            'channel_messages.fk_channel_id',
          )
          .where('fk_channel_id', '=', element.fk_channel_id)
          .orderBy('channel_messages.updated_at', 'asc')
          .limit(1);
        return message;
      }),
    );
    const lastMessages = messages.map((item) => item[0]);
    lastMessages.sort(function(a, b) {
      let keyA = new Date(a.updated_at), 
          keyB = new Date(b.updated_at);
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

const knex = require('../../config/db');

const getChannelsById = async (id) => {
  const channels = await knex('channels')
    .select('channels.id as id', 'title')
    .where({ id });

  return channels;
};

const getFilteredChannels = async ({
  limit,
  createdAfter,
  searchWord,
  sortDate,
  sortMessages,
}) => {
  let channels = knex('channels');
  if (limit) {
    const numChannelsLimit = parseInt(limit, 10);
    channels = channels.limit(numChannelsLimit);
  }
  if (createdAfter) {
    const dateCreatedAfter = new Date(createdAfter);
    channels = channels.where('channels.created_date', '>', dateCreatedAfter);
  }
  if (searchWord) {
    channels = channels.where('channels.title', 'like', `%${searchWord}%`);
  }
  if (sortDate) {
    channels = channels.orderBy('channels.created_at', 'desc');
  }
  if (sortMessages) {
    channels = channels
      .join('channel_messages', {
        'channels.id': 'channel_messages.fk_channel_id',
      })
      .orderBy('channel_messages.updated_at', 'desc');
  }
  const resultSearch = await channels.select('*');
  return resultSearch;
};

const editChannel = async (channelId, updatedChannel) => {
  return knex('channels')
    .where({ id: channelId })
    .update({
      title: updatedChannel.title,
    });
};

module.exports = {
  getChannelsById,
  getFilteredChannels,
  editChannel,
};

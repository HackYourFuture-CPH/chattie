const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const createChannel = async (body) => {
  await knex('channels').insert({
    title: body.title,
    created_at: moment(body.created_at).format(),
    updated_at: moment(body.updated_at).format(),
    deleted_at: moment(body.deleted_at).format(),
    id: body.id,
  });

  return {
    successful: true,
  };
};

const getChannels = async () => {
  try {
    return await knex('channels').orderBy('channels.title');
  } catch (error) {
    return error.message;
  }
};

const getChannelsById = async (id) => {
  try {
    const channels = await knex('channels')
      .select('channels.id as id', 'title')
      .where({ id });
    if (channels.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return channels;
  } catch (error) {
    return error.message;
  }
};

const getLimitNumberChannels = async (limit) => {
  try {
    const numChannelsLimit = parseInt(limit, 10);
    return await knex('channels')
      .select('channels.id', 'channels.title')
      .limit(numChannelsLimit);
  } catch (error) {
    return error.message;
  }
};

const getCreatedAfterChannels = async (createdAfter) => {
  try {
    const dateCreatedAfter = new Date(createdAfter);
    return await knex('channels').where(
      'channels.created_date',
      '>',
      dateCreatedAfter,
    );
  } catch (error) {
    return error.message;
  }
};

const getSpecifiedChannelsTitle = async (searchWord) => {
  try {
    return await knex('channels')
      .select('channels.id', 'channels.title as title')
      .where('title', 'like', `%${searchWord}%`);
  } catch (error) {
    return error.message;
  }
};

const getRecentlyCreatedChannels = async () => {
  try {
    return await knex('channels')
      .select('channels.id', 'channels.title')
      .orderBy('channels.created_at', 'desc');
  } catch (error) {
    return error.message;
  }
};

const getChannelsWithLatestMessages = async () => {
  try {
    return await knex('channels')
      .select('channels.id', 'channels.title')
      .join('channel_messages', {
        'channels.id': 'channel_messages.fk_channel_id',
      })
      .orderBy('channel_messages.updated_at', 'desc');
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createChannel,
  getChannels,
  getChannelsById,
  getLimitNumberChannels,
  getCreatedAfterChannels,
  getSpecifiedChannelsTitle,
  getRecentlyCreatedChannels,
  getChannelsWithLatestMessages,
};

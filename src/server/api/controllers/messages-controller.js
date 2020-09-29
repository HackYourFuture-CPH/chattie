/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');
// getting all messages from channel_messages and query based on query, channel_id, sender, limit, sort and date
const getChannelMessages = async (req) => {
  const { query, channel_id, sender, limit, sort } = req.query;

  let channelMessages = knex('channel_messages').distinct('*');

  try {
    if (query) {
      channelMessages = channelMessages.where(
        'channel_messages.message',
        'like',
        `%${query}%`,
      );
    }
    if (channel_id) {
      channelMessages = channelMessages.where(
        'channel_messages.id',
        channel_id,
      );
    }
    if (sender) {
      channelMessages = channelMessages.where(
        'channel_messages.fk_user_id',
        'like',
        `%${sender}%`,
      );
    }
    if (limit) {
      channelMessages = channelMessages.limit(limit);
    }
    if (sort) {
      channelMessages = channelMessages.orderBy(
        'channel_messages.created_at',
        sort,
      );
    }
    return await channelMessages
      .groupBy('channel_messages.id')
      .orderBy('channel_messages.id', 'desc');
  } catch (error) {
    return error.message;
  }
};

const getMessageById = async (id) => {
  try {
    const messages = await knex('messages')
      .select('messages.id as id', 'title')
      .where({ id });
    if (messages.length === 0) {
      throw new Error(`incorrect entry message with the id of ${id}`, 404);
    }
    return messages;
  } catch (error) {
    return error.message;
  }
};

const editMessage = async (messageId, updatedMessage) => {
  return knex('channel_messages')
    .where('id', '=', messageId)
    .update({
      message: updatedMessage.message,
      seenUnseen: updatedMessage.seenUnseen,
      fk_channel_id: updatedMessage.channelId,
      fk_user_id: updatedMessage.userId,
      updated_at: moment().format(),
    });
};
const deleteMessage = async (messagesId) => {
  return knex('channel_messages')
    .where({ id: messagesId })
    .del();
};

const createMessage = async (body) => {
  const newMessage = {
    message: body.message,
    created_at: moment().format(),
    fk_user_id: body.userId,
    fk_channel_id: body.channelId,
  };
  const messageId = await knex('channel_messages').insert(newMessage);
  const userInCahnnel = knex.select('fk_user_id').from('channel_members');
  (await userInCahnnel).forEach(async () => {
    const addNewRow = await knex('unread_messages').insert({
      unread: 1,
      fk_user_id: body.userId,
      fk_channel_id: body.channelId,
    });
    return addNewRow;
  });

  return {
    successful: true,
    id: messageId[0],
  };
};

module.exports = {
  getChannelMessages,
  getMessageById,
  deleteMessage,
  createMessage,
  editMessage,
};

/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');
// getting all messages from channel_messages and query based on query, channelId, sender, limit, sort and date
const getChannelMessages = async (req) => {
  const { query, channelId, sender, limit, sort } = req.query;

  let channelMessages = knex('channel_messages').distinct('*');

  try {
    if (query) {
      channelMessages = channelMessages.where(
        'channel_messages.message',
        'like',
        `%${query}%`,
      );
    }
    if (channelId) {
      channelMessages = channelMessages
        .select('users.user_name as userName')
        .where('channel_messages.fk_channel_id', channelId)
        .join('users', {
          'channel_messages.fk_user_id': 'users.id',
        })
        .orderBy('channel_messages.updated_at', 'asc');
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
    fk_user_id: body.userId,
    fk_channel_id: body.channelId,
  };
  // This is to make sure you can not send an empty message.
  if (newMessage.message.length === 0) {
    return 'sorry message field can not be empty';
  }

  const messageId = await knex('channel_messages').insert(newMessage);
  const usersInChannel = await knex
    .select('fk_user_id')
    .from('channel_members')
    .where({ fk_channel_id: body.channelId });
  usersInChannel.forEach(async () => {
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

/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

// getting all messages from channel_messages and query based on query, channel_id, sender, limit, sort and date
const getMessages = async (query, channel_id, sender, limit, sort, date) => {
  const get_channel_messages = knex('channel_messages').distinct('*');
  try {
    if (query) {
      return await get_channel_messages.where(
        'channel_messages.message',
        'like',
        `%${query}%`,
      );
    }
    if (channel_id) {
      return await get_channel_messages.where(
        'channel_messages.id',
        channel_id,
      );
    }
    if (sender) {
      return await get_channel_messages.where(
        'channel_messages.fk_user_id',
        'like',
        `%${sender}%`,
      );
    }
    if (limit) {
      return await get_channel_messages.limit(limit);
    }
    if (sort) {
      return await get_channel_messages.orderBy('channel_messages.id', sort);
    }
    if (date) {
      return await get_channel_messages.orderBy(
        'channel_messages.created_at',
        `%${date}%`,
      );
    }
    return await get_channel_messages
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
  return knex('messages')
    .where({ id: messageId })
    .update({
      title: updatedMessage.title,
      startDate: moment(updatedMessage.startDate).format(),
      endDate: moment(updatedMessage.endDate).format(),
      classId: updatedMessage.classId,
      updatedAt: moment().format(),
    });
};

const deleteMessage = async (messagesId) => {
  return knex('messages')
    .where({ id: messagesId })
    .del();
};

const createMessage = async (body) => {
  await knex('messages').insert({
    title: body.title,
    startDate: moment(body.startDate).format(),
    endDate: moment(body.endDate).format(),
    classId: body.classId,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getMessages,
  getMessageById,
  deleteMessage,
  createMessage,
  editMessage,
};

/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getMessages = async (query, channel_id, sender, limit, sort, sort_by) => {
  const getMes = knex('channel_messages')
    .select(
      knex.raw(
        'DISTINCT channel_messages.id, channel_messages.message, channel_messages.fk_channel_id,channel_messages.fk_user_id,channel_messages.created_at, channel_messages.updated_at,channel_messages.deleted_at,users.id,users.profile_image, users.user_name,users.email, users.last_seen, users.created_at, users.updated_at, users.deleted_at',
      ),
    )
    .leftJoin(knex.raw('users ON users.id = channel_messages.fk_user_id'));
  try {
    if (query) {
      return await getMes.where(
        'channel_messages.message',
        'like',
        `%${query}%`,
      );
    }
    if (channel_id) {
      return await getMes.where('channel_messages.id', channel_id);
    }
    if (sender) {
      return await getMes.where('users.email', 'like', `%${sender}%`);
    }
    if (limit) {
      return await getMes.limit(limit);
    }
    if (sort) {
      return await getMes.orderBy('channel_messages.id', sort);
    }
    if (sort_by) {
      return await getMes.orderBy(
        'channel_messages.created_at',
        `%${sort_by}%`,
      );
    }
    return await getMes
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

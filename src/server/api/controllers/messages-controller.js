const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');
const { select } = require('../../config/db');

const getMessages = async () => {
  try {
    return await knex('messages').select('messages.id', 'messages.title');
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
  await knex('channel_messages').insert({
    message: body.message,
    created_at: body.created_at,
    fk_user_id :body.fk_user_id,
    fk_channel_id: body.fk_channel_id
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
const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

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

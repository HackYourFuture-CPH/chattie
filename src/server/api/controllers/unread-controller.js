const knex = require('../../config/db');

const getUnreadMessages = async (req) => {
  const { userId, channelId } = req.query;
  let unreadMessages = knex('unread_messages').distinct('*');
  try {
    if (userId) {
      unreadMessages = unreadMessages.where(
        'unread_messages.fk_user_id',
        userId,
      );
    }
    if (channelId) {
      unreadMessages = unreadMessages.where(
        'unread_messages.fk_channel_id',
        channelId,
      );
    }

    return await unreadMessages
      .groupBy('unread_messages.id')
      .orderBy('unread_messages.id', 'desc');
  } catch (error) {
    return error.message;
  }
};

const updateUnreadMessages = async (req) => {
  const { id } = req.params;
  const { userId, channelId } = req.body;
  try {
    const upDateUnReadMessage = await knex('unread_messages')
      .update('unread', 0)
      .where('id', id)
      .andWhere('fk_user_id', userId)
      .andWhere('fk_channel_id', channelId);

    return upDateUnReadMessage;
  } catch (error) {
    return error.message;
  }
};

const createUnreadMessages = async (body) => {
  await knex('unread_messages').insert({
    unread: body.unread,
    fk_user_id: body.userId,
    fk_message_id: body.messagelId,
    fk_channel_id: body.channelId,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getUnreadMessages,
  updateUnreadMessages,
  createUnreadMessages,
};

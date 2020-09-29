const knex = require('../../config/db');

const getUnReadMessages = async (req) => {
  const { userId, messageId, channelId } = req.query;
  console.log(userId);

  try {
    let unreadMessages = knex('unread_messages')
      .select(
        knex.raw(
          'DISTINCT unread_messages.id AS unreadId,unread_messages.unread,unread_messages.fk_user_id AS userId, unread_messages.fk_message_id AS messageId ,unread_messages.fk_channel_id AS channelId, channels.title, channel_messages.message, users.user_name',
        ),
      )
      .leftJoin(
        knex.raw('channels ON channels.id = unread_messages.fk_channel_id'),
      )
      .leftJoin(
        knex.raw(
          'channel_messages ON channel_messages.id = unread_messages.fk_message_id',
        ),
      )
      .leftJoin(knex.raw('users ON users.id = unread_messages.fk_user_id'));

    if (userId) {
      unreadMessages = unreadMessages.where(
        'unread_messages.fk_user_id',
        userId,
      );
    }
    if (messageId) {
      unreadMessages = unreadMessages.where(
        'unread_messages.fk_message_id',
        messageId,
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

const upDateUnReadMessages = async (req, res) => {
  const { id } = req.params;
  const { unread, userId, messageId, channelId } = res.body;
  // console.log('id', id);
  // console.log('unread', unread);

  try {
    const upDateUnReadMessage = await knex('unread_messages')
      .update('unread', unread)
      .where('id', id);
    if (userId) {
      upDateUnReadMessage.andWhere('fk_user_id', userId);
    }
    if (messageId) {
      upDateUnReadMessage.orWhere('fk_message_id', messageId);
    }
    if (channelId) {
      upDateUnReadMessage.orWhere('fk_channel_id', channelId);
    }
    return upDateUnReadMessage;
  } catch (error) {
    return error.message;
  }
};

const createUnReadMessages = async (body) => {
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
  getUnReadMessages,
  upDateUnReadMessages,
  createUnReadMessages,
};

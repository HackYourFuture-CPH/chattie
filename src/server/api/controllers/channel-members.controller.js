const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getChannelMemberById = async (id) => {
  try {
    const channelMemberById = await knex('channel_members')
      .select(
        'channel_members.fk_channel_id',
        'user_name',
        'profile_image',
        'channel_members.created_at',
        'last_seen',
      )
      .innerJoin('users', 'users.id', '=', 'channel_members.fk_user_id')
      .where({ 'channel_members.fk_channel_id': id });
    if (channelMemberById.length === 0) {
      throw new Error(
        `incorrect entry channel members with the id of ${id}`,
        404,
      );
    }
    return channelMemberById;
  } catch (error) {
    return error.message;
  }
};

const createChannelMember = async (body) => {
  await knex('channel_members').insert({
    fk_channel_id: body.channelId,
    fk_user_id: body.userId,
  });

  return {
    successful: true,
  };
};

module.exports = {
  createChannelMember,
  getChannelMemberById,
};

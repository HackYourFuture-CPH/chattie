const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

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

const deleteChannelMember = async (channelMemberId) => {
  return knex('channel_members')
    .where({ id: channelMemberId })
    .del();
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

const editChannelMembers = async (channelMemberId, updatedChannelMember) => {
  return knex('channel_members')
    .where({ id: channelMemberId })
    .update({
      fk_channel_id: updatedChannelMember.channelId,
      fk_user_id: updatedChannelMember.userId,
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss'), // included datetime format for MySQL
    });
};

module.exports = {
  createChannelMember,
  deleteChannelMember,
  getChannelMemberById,
  editChannelMembers,
};

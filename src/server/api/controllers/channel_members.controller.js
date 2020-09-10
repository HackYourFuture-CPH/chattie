const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getChannelMembers = async () => {
  try {
    return await knex('channel_members').select('channel_members.id', 'channel_members.title');
  } catch (error) {
    return error.message;
  }
};

const getChannelMemberById = async (id) => {
  try {
    const channelMembers = await knex('channel_members')
      .select('channel_members.id as id', 'title')
      .where({ id });
    if (channelMembers.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return channelMembers;
  } catch (error) {
    return error.message;
  }
};

const editChannelMember = async (channelMemberId, updatedChannelMember) => {
  return knex('channel_members')
    .where({ id: channelMemberId })
    .update({
      title: updatedChannelMember.title,
      startDate: moment(updatedChannelMember.startDate).format(),
      endDate: moment(updatedChannelMember.endDate).format(),
      classId: updatedChannelMember.classId,
      updatedAt: moment().format(),
    });
};

const deleteChannelMember = async (channelMemberId) => {
  return knex('channel_members')
    .where({ id: channelMemberId })
    .del();
};

const createChannelMember = async (body) => {
  await knex('channel_members').insert({
    fk_channel_id: body.channelId,
    fk_user_id: body.userId
  });

  return {
    successful: true,
  };
};

module.exports = {
  getChannelMembers,
  getChannelMemberById,
  deleteChannelMember,
  createChannelMember,
  editChannelMember,
};

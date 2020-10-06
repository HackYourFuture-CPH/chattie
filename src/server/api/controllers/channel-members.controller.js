const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getChannelMembersByChannelId = async (channelId) => {
  const channelMembers = await knex('channel_members')
    .select(
      'users.email',
      'users.user_name as userName',
      'users.profile_image as profileImage',
    )
    .where('channel_members.fk_channel_id', channelId)
    .join('users', {
      'channel_members.fk_user_id': 'users.id',
    });
  return channelMembers;
};

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

const checkForGeneralChannels = async (arrOfUsers) => {
  const generalChannels = await knex('channel_members')
    .select('fk_channel_id as channelId')
    .whereIn('fk_user_id', arrOfUsers)
    .groupBy('fk_channel_id')
    .having(knex.raw('count(*)'), '=', arrOfUsers.length);
  return generalChannels.map((channel) => channel.channelId);
};

async function getCommonChannels(users) {
  // get all channels where the users are member off and the number of users is equal to users.length
  const allChannelsForUsers = await knex('channel_members as a')
    .count('a.fk_user_id', { as: 'numberOfUsers' })
    .join('channel_members as b', 'b.fk_channel_id', 'a.fk_channel_id')
    .select('a.id', 'a.fk_channel_id as channelId')
    .whereIn('a.fk_user_id', users)
    .groupBy('a.id')
    .having('numberOfUsers', '=', users.length);

  // map throw all the channels using the channel id to call a query that
  // return all the users id are member in that channel and make it as an array called membersId
  const promischannelMembers = allChannelsForUsers.map(async (row) => {
    const channelMembers = await knex('channel_members as a')
      .select('a.fk_user_id as userId')
      .where('a.fk_channel_id', '=', row.channelId);
    const intArr = channelMembers.map((userObj) => userObj.userId);
    return { ...row, membersId: intArr };
  });

  // call all the promises
  const channelMembers = await Promise.all(promischannelMembers);

  const commonChannelsId = [];

  // check each chanel for membersIds array if this array is same length as users and all
  // the items in that array exected in users
  channelMembers.forEach((channel) => {
    if (
      channel.membersId.every((currentValue) => users.includes(currentValue)) &&
      channel.membersId.length === users.length
    ) {
      commonChannelsId.push(channel.channelId);
    }
  });

  // clean the repeated channelIds
  const channelIdToReturn = commonChannelsId.reduce((a, b) => {
    if (a.indexOf(b) === -1) {
      a.push(b);
    }
    return a;
  }, []);

  return channelIdToReturn;
}

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
  getChannelMembersByChannelId,
  getChannelMemberById,
  checkForGeneralChannels,
  getCommonChannels,
  editChannelMembers,
};

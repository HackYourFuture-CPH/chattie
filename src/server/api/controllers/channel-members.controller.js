const knex = require('../../config/db');

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

module.exports = {
  createChannelMember,
  deleteChannelMember,
};

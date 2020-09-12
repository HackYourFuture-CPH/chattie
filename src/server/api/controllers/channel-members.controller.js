const knex = require('../../config/db');

const deleteChannelMember = async (channelMemberId) => {
  return knex('channel_members')
    .where({ id: channelMemberId })
    .del();
};

module.exports = {
  deleteChannelMember,
};

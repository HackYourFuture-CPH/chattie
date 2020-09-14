const knex = require('../../config/db');

const deleteChannelById = async (channelId) => {
  return knex('channels')
    .where({ id: channelId })
    .del();
};

module.exports = {
  deleteChannelById,
};

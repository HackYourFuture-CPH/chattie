const knex = require('../../config/db');
// const Error = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const checkPrivateChannel = async (userId1, userId2) => {
  const result = await knex('channel_members as a')
    .select('a.fk_channel_id', 'a.fk_user_id')
    .join('channel_members as b', 'b.fk_channel_id', 'a.fk_channel_id')
    .groupBy('a.id')
    .havingIn('a.fk_user_id', [userId1, userId2]);

  return result;
};

module.exports = {
  checkPrivateChannel,
};

const knex = require('../../config/db');
// const Error = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

async function checkPrivateChannel(arrOfUsers) {
  const all = await knex('channel_members as a')
    .count('a.fk_user_id', { as: 'numberOfUsers' })
    .join('channel_members as b', 'b.fk_channel_id', 'a.fk_channel_id')
    .select('a.id', 'a.fk_channel_id as channelId')
    .whereIn('a.fk_user_id', arrOfUsers)
    .groupBy('a.id')
    .having('numberOfUsers', '=', arrOfUsers.length);
  const d = all.filter(async (res) => {
    console.log('first res', res);
    const channelMembers = await knex('channel_members as a')
      .select('a.fk_user_id as userId')
      .where('a.fk_channel_id', '=', res.channelId);

    const intArr = channelMembers.map((userObj) => userObj.userId);
    console.log(
      intArr.every((currentValue) => arrOfUsers.includes(currentValue)),
    );
    if (
      intArr.every((currentValue) => arrOfUsers.includes(currentValue)) &&
      intArr.length === arrOfUsers.length
    ) {
      console.log('here', res);
      return res;
    }
    return { ...res, channelId: false };
  });
  return d;
}

module.exports = {
  checkPrivateChannel,
};
/**
 *   .on('query-response', function (response) {
      console.log('from here', response);
      return response;
    })
    .then((res2) => {
      console.log('res2', res2);
      res2.filter(async (res) => {
        console.log('first res', res);
        const channelMembers = await knex('channel_members as a')
          .select('a.fk_user_id as userId')
          .where('a.fk_channel_id', '=', res.channelId);

        const intArr = channelMembers.map((userObj) => userObj.userId);
        console.log(
          intArr.every((currentValue) => arrOfUsers.includes(currentValue)),
        );
        if (
          intArr.every((currentValue) => arrOfUsers.includes(currentValue)) &&
          intArr.length === arrOfUsers.length
        ) {
          console.log('here', res);
          return res;
        }
      });
    })
    .catch((error) => console.log(error));
 */

const knex = require('../../config/db');
// const Error = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

async function checkPrivateChannel(arrOfUsers) {
  // get all channels where the users are member off and the number of users is equal to arrOfUsers.length
  const allChannelsForUsers = await knex('channel_members as a')
    .count('a.fk_user_id', { as: 'numberOfUsers' })
    .join('channel_members as b', 'b.fk_channel_id', 'a.fk_channel_id')
    .select('a.id', 'a.fk_channel_id as channelId')
    .whereIn('a.fk_user_id', arrOfUsers)
    .groupBy('a.id')
    .having('numberOfUsers', '=', arrOfUsers.length);

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

  // check each chanel for membersIds array if this array is same length as arrOfUsers and all
  // the items in that array exected in arrOfUsers
  channelMembers.forEach((channel) => {
    if (
      channel.membersId.every((currentValue) =>
        arrOfUsers.includes(currentValue),
      ) &&
      channel.membersId.length === arrOfUsers.length
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
module.exports = {
  checkPrivateChannel,
};

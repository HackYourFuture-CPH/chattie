const knex = require('../../config/db');
// const Error = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

async function checkPrivateChannel(arrOfUsers) {
  const allUsersChannels = await knex('channel_members as a')
    .select('a.id', 'a.fk_channel_id as channel', 'a.fk_user_id as user')
    .whereIn('a.fk_user_id', arrOfUsers)
    .groupBy('a.fk_channel_id');

  const commonChannels = [];
  let i;
  allUsersChannels.forEach((member) => {
    for (i = 0; i < allUsersChannels.length; i + 1) {
      /*
      if (
        allUsersChannels[i].id !== member.id &&
        allUsersChannels[i].user !== member.user &&
        allUsersChannels[i].channel === member.channel
      ) {
        commonChannels.push(member);
        
      } else {
        return;
      } */
      // commonChannels.push(member);
      console.log(member);
    }
  });
  /* const commonChannels = commonChannels.find(
    async (member) => (await roomMembers(member.channel).length) === 2,
  ); */

  return commonChannels;
}
async function roomMembers(channelId) {
  const members = await knex('channel_members as a')
    .select('a.id', 'a.fk_user_id')
    .where('a.fk_channel_id', '=', channelId);
  console.log(`members:${channelId} `, members);
  return members;
}

module.exports = {
  checkPrivateChannel,
};

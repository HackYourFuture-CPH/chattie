/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const moment = require('moment-timezone');

const createUser = async (body) => {
  await knex('users').insert({
    profileImage: body.profileImage,
    user_name: body.user_name,
    email: body.email,
    lastSeen: moment(body.lastSeen).format(),
    created_at: moment().format(),
  });

  return {
    successful: true,
  };
};

module.exports = {
  createUser,
};

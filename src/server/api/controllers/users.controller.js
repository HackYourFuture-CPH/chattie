const knex = require('../../config/db');

const moment = require('moment-timezone');

const createUser = async (body) => {
  const newUser = {
    user_name: body.userName,
    email: body.email,
    profile_image: body.profileImage,
    last_seen: new Date(),
  };
  await knex('users').insert(newUser);
  return {
    successful: true,
  };
};

module.exports = {
  createUser,
};

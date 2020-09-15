const knex = require('../../config/db');

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
    user_name: newUser.user_name,
    email: newUser.email,
    profile_image: newUser.profile_image,
    last_seen: newUser.last_seen,
  };
};

module.exports = {
  createUser,
};

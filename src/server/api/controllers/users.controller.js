const knex = require('../../config/db');

const createUser = async (body) => {
  const newUser = {
    user_name: body.userName,
    email: body.email,
    profile_image: body.profileImage,
    last_seen: new Date(),
  };

  const createdUser = await knex('users').insert(newUser);
  return {
    successful: true,
    id: createdUser[0],
  };
};

module.exports = {
  createUser,
};

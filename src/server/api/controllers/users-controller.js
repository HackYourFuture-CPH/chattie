const knex = require('../../config/db');

const getUserById = async (id) => {
  try {
    const user = await knex('users')
      .select('user_name', 'id')
      .where({ id });
    return user;
  } catch (error) {
    return error.message;
  }
};

const getFilteredUsers = async ({
  limit,
  userName,
  profileImageUrl,
  email,
}) => {
  let searchUsers = knex('users');
  if (limit) {
    searchUsers = searchUsers.limit(limit);
  }
  if (userName) {
    searchUsers = searchUsers.where('user_name', 'like', `%${userName}%`);
  }
  if (profileImageUrl) {
    searchUsers = searchUsers.where(
      'profile_image',
      'like',
      `%${profileImageUrl}%`,
    );
  }
  if (email) {
    searchUsers = searchUsers.where('email', 'like', `%${email}%`);
  }

  return searchUsers;
};

const createUser = async (body) => {
  const newUser = {
    uid: body.uid,
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
  getUserById,
  getFilteredUsers,
  createUser,
};

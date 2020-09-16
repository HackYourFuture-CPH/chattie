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

module.exports = {
  getUserById,
  getFilteredUsers,
};

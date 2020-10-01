const knex = require('../../config/db');
const moment = require('moment-timezone');

const getUserByUid = async (uid) => {
  const user = await knex('users')
    .select('user_name', 'id')
    .limit(1)
    .where({ uid });
  return user.length === 1 ? user[0] : undefined;
};

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

// users delete by id
const deleteUser = async (userId) => {
  return knex('users')
    .where({ id: userId })
    .del();
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

const editUser = async (userId, updatedUser) => {
  return knex('users')
    .where({ id: userId })
    .update({
      profile_image: updatedUser.profileImage,
      user_name: updatedUser.userName,
      email: updatedUser.email,
      last_seen: new Date(),
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss'), // included datetime format for MySQL
    });
};

module.exports = {
  getUserByUid,
  getUserById,
  getFilteredUsers,
  createUser,
  deleteUser,
  editUser,
};

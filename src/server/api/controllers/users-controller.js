const knex = require('../../config/db');
const moment = require('moment-timezone');

const getUsers = async () => {
  try {
    const users = await knex('users').select('*');
    return users;
  } catch (error) {
    return error;
  }
};

const getUserByUid = async (uid) => {
  const user = await knex('users')
    .select(
      'id',
      'email',
      'uid',
      'profile_image as profileImage',
      'user_name as userName',
      'role',
      'phone_number as phoneNumber',
    )
    .limit(1)
    .where({ uid });
  return user.length === 1 ? user[0] : {};
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

const getFilteredUsers = async (req) => {
  const { limit, userName, profileImageUrl, email } = req;
  try {
    let searchUsers = knex('users').select('*');

    if (limit) {
      searchUsers = searchUsers.limit(limit);
      return searchUsers;
    }
    if (userName) {
      searchUsers = searchUsers.where('user_name', 'like', `%${userName}%`);
      return searchUsers;
    }
    if (profileImageUrl) {
      searchUsers = searchUsers.where(
        'profile_image',
        'like',
        `%${profileImageUrl}%`,
      );
      return searchUsers;
    }
    if (email) {
      searchUsers = searchUsers.where('email', '=', `${email}`);
      return searchUsers;
    }

    // if the query does not match any of these search you get this message.
    if (!limit || !userName || !email || !profileImageUrl) {
      return 'The search is not supported';
    }
  } catch (error) {
    return error;
  }
};

const createUser = async (body) => {
  const newUser = {
    uid: body.uid,
    user_name: body.userName,
    email: body.email,
    profile_image: body.profileImage,
    phone_number: body.phoneNumber,
    role: body.role,
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
      phone_number: updatedUser.phoneNumber,
      role: updatedUser.role,
      last_seen: new Date(),
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss'), // included datetime format for MySQL
    });
};

const confirmUser = async ({ uid, email }) => {
  const users = await knex('users')
    .where({ uid })
    .select('id');

  if (!users || !users.length) {
    console.log('No users found');

    const ids = await knex('users').insert({
      email,
      uid,
      last_seen: new Date(),
    });

    return {
      userId: ids[0],
    };
  }

  return {
    userId: users[0].id,
  };
};

module.exports = {
  getUsers,
  getUserByUid,
  getUserById,
  getFilteredUsers,
  createUser,
  deleteUser,
  editUser,
  confirmUser,
};

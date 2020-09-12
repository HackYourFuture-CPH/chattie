const knex = require('../../config/db');

const getUsers = async () => {
  try {
    const userList = await knex('users')
      .select('*')
      .limit(20);
    return userList.length > 0 ? userList : 'No Users';
  } catch (error) {
    return error.message;
  }
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

module.exports = {
  getUsers,
  getUserById,
};

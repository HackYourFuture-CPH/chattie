const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getUsers = async () => {
  try {
    return await knex('users').select('users.id', 'users.user_name');
  } catch (error) {
    return error.message;
  }
};

const getUserById = async (id) => {
  try {
    const users = await knex('users')
      .select('users.id as id', 'title')
      .where({
        id
      });
    if (users.length === 0) {
      throw new Error(`incorrect entry of the user with an id of ${id}`, 404);
    }
    return getUserById;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUsers,
  getUserById,
};

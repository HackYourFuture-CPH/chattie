/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

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
        id,
      });
    if (users.length === 0) {
      throw new Error(`incorrect entry of the user with an id of ${id}`, 404);
    }
    return getUserById;
  } catch (error) {
    return error.message;
  }
};

const createUser = async (body) => {
  await knex('users').insert({
    profileImage: body.profileImage,
    user_name: body.user_name,
    email: body.email,
    lastSeen: moment(body.lastSeen).format(),
    created_at: moment(body.created_at).format(),
    updated_at: moment(body.updated_at).format(),
    deleted_at: moment(body.deleted_at).format(),
    classId: body.classId,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};

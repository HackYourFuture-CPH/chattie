const knex = require('../../config/db');

const userDeleteById = async (userId) => {
  try {
    return await knex('user')
      .where({ id: userId })
      .del();
  } catch (error) {
    return error.message;
  }
};
module.exports = userDeleteById;

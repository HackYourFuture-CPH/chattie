const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const userDeleteById = async (id) => {
  try {
    return await knex('user')
      .where({ id: id })
      .del();
  } catch (error) {
    return error.message;
  }
};
module.exports = userDeleteById;

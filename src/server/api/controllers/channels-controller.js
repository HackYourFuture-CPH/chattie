const knex = require('../../config/db');
const moment = require('moment-timezone');

const createChannel = async (body) => {
  await knex('channels').insert({
    title: body.title,
    created_at: moment(body.created_at).format(),
    updated_at: moment(body.updated_at).format(),
    deleted_at: moment(body.deleted_at).format(),
  });

  return {
    successful: true,
  };
};

module.exports = {
  createChannel,
};

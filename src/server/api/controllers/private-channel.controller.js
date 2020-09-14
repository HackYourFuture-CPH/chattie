const knex = require('../../config/db');
// const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const createPrivateChannel = async (body) => {
  await knex('channel').insert({
    title: body.title,
    startDate: moment(body.startDate).format(),
    endDate: moment(body.endDate).format(),
    classId: body.classId,
  });

  return {
    successful: true,
  };
};

module.exports = {
  createPrivateChannel,
};

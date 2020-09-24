/* eslint-disable camelcase */
const knex = require('../../config/db');

const createNotification = async (body) => {
  const newNotification = {
    title: body.title,
  };
  //  will return the total number of notifications after inserting a new notification
  const insertedNotifications = await knex('notifications').insert(
    newNotification,
  );

  return {
    successful: true,
    //  id for the newly created notification will be same as total number of notifications inserted
    id: insertedNotifications[0],
  };
};
// users delete by id
const deleteNotification = async (notiId) => {
  return knex('notifications')
    .where({ id: notiId })
    .del();
};

module.exports = {
  createNotification,
  deleteNotification,
};

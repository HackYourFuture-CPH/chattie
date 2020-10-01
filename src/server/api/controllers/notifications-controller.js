/* eslint-disable camelcase */
const knex = require('../../config/db');

const createNotification = async (body) => {
  const newNotification = {
    message: body.message,
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

notificationEndpoints
const editNotification = async (notificationId, updatedNotification) => {
  return knex('notifications')
    .where({ id: notificationId })
    .update({
      title: updatedNotification.title,
    });
  
// users delete by id
const deleteNotification = async (notificationId) => {
  return knex('notifications')
    .where({ id: notificationId })
    .del();
};

module.exports = {
  createNotification,
  editNotification,
  deleteNotification,
};

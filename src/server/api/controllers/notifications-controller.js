/* eslint-disable camelcase */
const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
// get all notifications
// get unread notifications
const getNotifications = async (req) => {
  try {
    const { has_been_read, sort } = req.query;
    let notifications = knex('notifications')
      .select(
        'notifications.id AS id',
        'notifications.fk_user_id AS userId',
        'message',
        `has_been_read AS isUnread`,
        'notifications.created_at AS createdAt',
      )
      .innerJoin('users', 'users.id', '=', 'notifications.fk_user_id');

    if (has_been_read === 'false') {
      notifications = notifications.where('has_been_read', '=', false);
    }

    if (sort) {
      notifications = notifications.orderBy('notifications.created_at', sort);
    }
    if (notifications.length === 0) {
      throw new Error(`incorrect entry notifications`, 404);
    }
    return await notifications
      .groupBy('notifications.id')
      .orderBy('notifications.created_at', 'desc');
  } catch (error) {
    return error.message;
  }
};

const getNotificationsById = async (id) => {
  try {
    const notificationById = await knex('notifications')
      .select(
        'notifications.id AS id',
        'notifications.fk_user_id AS userId',
        'message',
        'has_been_read AS isUnread',
        'notifications.created_at AS createdAt',
      )
      .innerJoin('users', 'users.id', '=', 'notifications.fk_user_id')
      .where('notifications.id', '=', id);
    if (notificationById.length === 0) {
      throw new Error(
        `incorrect entry notifications with the id of ${id}`,
        404,
      );
    }
    return notificationById[0];
  } catch (error) {
    return error.message;
  }
};

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
const deleteNotification = async (notificationId) => {
  return knex('notifications')
    .where({ id: notificationId })
    .del();
};

module.exports = {
  createNotification,
  deleteNotification,
  getNotifications,
  getNotificationsById,
};

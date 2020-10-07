/* eslint-disable camelcase */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const unreadMessagesController = require('../controllers/unread-controller');

/**
 * @swagger
 * /unread:
 *  get:
 *    summary: Get Unread_messages
 *    description:
 *      Get Unread_messages.
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: userId
 *       schema:
 *         type: string
 *         description: Returning unread messages from unread_messages based on query
 *     - in: query
 *       name: channelId
 *       schema:
 *         type: integer
 *         description: Get channel_messages.id
 *    responses:
 *      201:
 *        description: Get Unread_messagesd
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request.
 */

router.get('/', (req, res, next) => {
  unreadMessagesController
    .getUnreadMessages(req)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /unread:
 *  patch:
 *    summary: update unread_messages
 *    description:
 *      update unread_messages.
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: userId
 *       schema:
 *         type: string
 *         description: updating unread messages from unread_messages based on query
 *     - in: query
 *       name: channelId
 *       schema:
 *         type: integer
 *         description: updating based onchannel_messages.id
 *    responses:
 *      201:
 *        description: Unread_messages
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request.
 */

router.patch('/:id', (req, res) => {
  unreadMessagesController
    .updateUnreadMessages(req)
    .then((result) => res.json(result))
    .catch(() => {
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;

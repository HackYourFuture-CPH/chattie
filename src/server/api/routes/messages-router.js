/* eslint-disable camelcase */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const messagesController = require('../controllers/messages-controller');

/**
 * @swagger
 * /messages:
 *  get:
 *    summary: Get channel_messages data by query
 *    description:
 *      Will return all messages.
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: query
 *       schema:
 *         type: string
 *         description: Returning messages from chennel_messages based on query
 *     - in: query
 *       name: channelId
 *       schema:
 *         type: integer
 *         description: Get channel_messages.id
 *     - in: query
 *       name: sender
 *       schema:
 *         type: integer
 *         description: Get users id trough channel_messages.fk_user_id
 *     - in: query
 *       name: limit
 *       schema:
 *         type: integer
 *         description: Limit the number of query
 *     - in: query
 *       name: sort
 *       schema:
 *         type: integer
 *         description: sort the query as asc or desc
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  messagesController
    .getChannelMessages(req)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /messages/{ID}:
 *  get:
 *    summary: Get messages by ID
 *    description:
 *      Will return a single message with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the message to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  messagesController
    .getMessageById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /messages:
 *  post:
 *    summary: Create a message
 *    description:
 *      Will create a message.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: message
 *        description: The message to create.
 *        schema:
 *          type: object
 *          required:
 *            - message
 *            - userId
 *            - channelId
 *          properties:
 *            message:
 *              type: string
 *            channelId:
 *              type: integer
 *            userId:
 *              type: integer
 *    responses:
 *      200:
 *        description: Message created
 *      5xx:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  messagesController
    .createMessage(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

/**
 * @swagger
 * /messages/{ID}:
 *  patch:
 *    summary: edit a message
 *    description:
 *      Will edit a message.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the message to edit.
 *      - in: body
 *        name: message
 *        description: The updated message.
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *            channelId:
 *              type: integer
 *            userId:
 *              type: integer
 *    responses:
 *      200:
 *        description: Module was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  messagesController
    .editMessage(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /messages/{ID}:
 *  delete:
 *    summary: Delete a message
 *    description:
 *      Will delete a message with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the message to delete.
 *    responses:
 *      200:
 *        description: Message deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  messagesController
    .deleteMessage(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the message id does not exist
      if (result === 0) {
        res.status(404).send('The message ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;

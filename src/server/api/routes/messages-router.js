/* eslint-disable camelcase */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const messagesController = require('../controllers/messages-controller');

/**
 * @swagger
 * /messages:
 *  get:
 *    summary: Get all messages
 *    description:
 *      Will return all messages.
 *    produces: application/json
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
 *    summary: Get module by ID
 *    description:
 *      Will return single module with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the module to get
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
 *    summary: Create a module
 *    description:
 *      Will create a module.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: module
 *        description: The module to create.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - startDate
 *            - endDate
 *             - classId
 *          properties:
 *            title:
 *              type: string
 *            startDate:
 *              type: string
 *              format: date-time
 *            endDate:
 *              type: string
 *              format: date-time
 *            classId:
 *              type: string
 *    responses:
 *      201:
 *        description: Module created
 *      5XX:
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
 *    summary: Create a module
 *    description:
 *      Will create a module.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the module to patch.
 *      - in: body
 *        name: module
 *        description: The module to create.
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            startDate:
 *              type: string
 *              format: date-time
 *            endDate:
 *              type: string
 *              format: date-time
 *            classId:
 *              type: string
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

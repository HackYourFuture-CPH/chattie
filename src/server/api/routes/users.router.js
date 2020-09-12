const express = require('express');
// require('express-async-errors');
const router = express.Router();

// controllers
const messagesController = require('../controllers/messages-controller');
const usersController = require('../controllers/users-controller');

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
    .getMessages()
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
 * /users:
 *  post:
 *    summary: Create a user
 *    description:
 *      Will create a user.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: Create a new user.
 *        schema:
 *          type: object
 *          required: *
 *            - profileImage,
 *            - user_name, *
 *            - email,
 *            - lastSeen
 *            - created_at
 *            - updated_at
 *            - deleted_at
 *          properties:
 *            ProfileImage:
 *              type: string
 *              format: URL
 *          user_name:
 *              type: string
 *            email:
 *              type: string
 *              format: email
 *            lastSeen:
 *              type: string
 *              format: date-time
 *          created_at:
 *              type: string
 *              format: date-time
 *           updated_at:
 *              type: string
 *              format: date-time
 *           deleted_at:
 *              type: string
 *
 *    responses:
 *      201:
 *        description: A new user created
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', (req, res) => {
  usersController
    .createUser(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

module.exports = router;

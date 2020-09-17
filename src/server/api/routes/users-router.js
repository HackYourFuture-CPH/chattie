const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usersController = require('../controllers/users-controller');

/**
 * @swagger
 * /users/:
 *  get:
 *    summary: Get users
 *    description:
 *      Will return all or filtered users
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: limit
 *       schema:
 *         type: integer
 *         description: The numbers of users to return
 *     - in: query
 *       name: searchUserName
 *       schema:
 *         type: string
 *         description: Get users that partially matches the specified username
 *     - in: query
 *       name: profileImageUrl
 *       schema:
 *         type: string
 *         description: Get users that partially matches the specified profileImageUrl
 *     - in: query
 *       name: searchUserEmail
 *       schema:
 *         type: string
 *         description: Get users that partially matches the specified user-email
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/', (req, res, next) => {
  usersController
    .getFilteredUsers(req.query)
    .then((result) => res.json(result))
    .catch(next);
});

// user delete by id
router.delete('/:id', (req, res, next) => {
  usersController
    .userDeleteById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /users/{ID}:
 *  get:
 *    summary: Get user by ID
 *    description:
 *      Will return single user with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the user to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  usersController
    .getUserById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /modules:
 *  post:
 *    summary: Create a user
 *    description:
 *      Will create a user.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: The module to create a user.
 *        schema:
 *          type: object
 *          required:
 *            - userName
 *            - email
 *            - profileImage
 *          properties:
 *            userName:
 *              type: string
 *            email:
 *              type: string
 *              format: email
 *            profileImage:
 *              type: string
 *    responses:
 *      201:
 *        description: user created
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', (req, res) => {
  usersController
    .createUser(req.body)
    .then((result) => res.json(result))
    .catch(() => {
      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

module.exports = router;

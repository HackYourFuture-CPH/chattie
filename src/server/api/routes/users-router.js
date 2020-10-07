const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usersController = require('../controllers/users-controller');

/**
 * @swagger
 * /User/{ID}:
 *  delete:
 *    summary: Delete a user
 *    description:
 *      Will delete a user with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the user to delete.
 *    responses:
 *      200:
 *        description: user deleted
 *      5XX:
 *        description: Unexpected error.
 */

router.delete('/:id', (req, res) => {
  usersController
    .deleteUser(req.params.id)
    .then((result) => {
      if (result === 0) {
        res.status(404).send('The user of this does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});
/**
 * @swagger
 * /users:
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
 *       name: userName
 *       schema:
 *         type: string
 *         description: Get users that partially matches the specified username
 *     - in: query
 *       name: profileImageUrl
 *       schema:
 *         type: string
 *         description: Get users that partially matches the specified profileImageUrl
 *     - in: query
 *       name: email
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
  if (Object.keys(req.query).length === 0) {
    usersController
      .getUsers()
      .then((result) => res.json(result))
      .catch(next);
  } else {
    usersController
      .getFilteredUsers(req.query)
      .then((result) => res.json(result))
      .catch(next);
  }
});

/**
 * @swagger
 * /users/current:
 *  get:
 *    summary: Get user by uid
 *    description:
 *      Will return single user with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: uid
 *       schema:
 *         type: string
 *         required: true
 *         description: The firebase uid of the user to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/current', (req, res, next) => {
  usersController
    .getUserByUid(req.query.uid)
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
 * /users:
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
 *            - uid
 *            - userName
 *            - email
 *            - profileImage
 *          properties:
 *            uid:
 *              type: string
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
      res.status(400).send('Bad request').end();
    });
});

/**
 * @swagger
 * /users/{ID}:
 *  patch:
 *    summary: edit a user
 *    description:
 *      Will edit a user.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the user to patch.
 *      - in: body
 *        name: user
 *        description: The user to edit.
 *        schema:
 *          type: object
 *          properties:
 *            profileImage:
 *              type: string
 *            userName:
 *              type: string
 *            email:
 *              type: string
 *            lastSeen:
 *              type: string
 *              format: date-time
 *            updatedAt:
 *              type: string
 *              format: date-time
 *    responses:
 *      200:
 *        description: Module was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res) => {
  usersController
    .editUser(req.params.id, req.body)
    .then((result) => {
      // If result is equal to 0, then that means the user id does not exist
      if (result === 0) {
        res.status(400).send(`User ID '${req.params.id}' does not exist.`);
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;

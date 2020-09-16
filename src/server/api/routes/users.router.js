const express = require('express');

const router = express.Router();

// controllers
const usersController = require('../controllers/users.controller');

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
 *            - user_name
 *            - email
 *            - profile_image
 *            - last_seen
 *          properties:
 *            user_name:
 *              type: string
 *            email:
 *              type: string
 *              format: email
 *            last_seen:
 *              type: string
 *              format: date-time
 *            profile_image:
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

module.exports = router;

const express = require('express');
// require('express-async-errors');
const router = express.Router();

// controllers
const usersController = require('../controllers/users.controller');

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
 *          required:
 *            - profileImage
 *            - user_name
 *            - email
 *            - lastSeen
 *          properties:
 *            ProfileImage:
 *              type: string
 *              format: URL
 *            user_name:
 *              type: string
 *            email:
 *              type: string
 *              format: email
 *            lastSeen:
 *              type: string
 *              format: date-time
 *
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

const express = require('express');
// require('express-async-errors');
const router = express.Router();

// controllers
const usersController = require('../controllers/users.controller');

/**
 * @swagger
 * /modules:
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
 *            - user_name
 *            - email
 *            - profile_image
 *             - last_seen
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
 *        description: Module created
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', (req, res) => {
  usersController
    .createUser(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;

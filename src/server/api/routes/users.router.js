const express = require('express');
// require('express-async-errors');
const router = express.Router();
const knex = require('../../config/db');

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
 *            - uid
 *            - email
 *            - username
 *          properties:
 *            uid:
 *              type: string
 *            email:
 *              type: string
 *              format: email
 *            username:
 *              type: string
 *    responses:
 *      201:
 *        description: A new user created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', async (req, res) => {
  const { uid, username, email } = req.body;

  const newUser = {
    uid,
    user_name: username,
    email,
    last_seen: new Date(),
  };

  try {
    await knex('users').insert(newUser);
    res.status(201).end();
  } catch (e) {
    res.status(400).send(e);
  }
});

// router.use((err, req, res, next) => {
//  res.status(400).send(err.message);
// });

module.exports = router;

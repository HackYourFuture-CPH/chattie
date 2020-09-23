const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const checkForChannelController = require('../controllers/private-channel.controller');
/**
 * @swagger
 * /private-channel:
 *  get:
 *    summary: check what channels have provided users
 *    description:
 *      Take an array of user and return what channels are they member of
 *    produces: application/json
 *    parameters:
 *      - name: users
 *        in: query
 *        description: Array of usersIds.
 *        required: true
 *        type: array
 *
 *
 *    responses:
 *      201:
 *        description:successful operation
 *
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res) => {
  const { users } = req.query;
  const arrUsers = JSON.parse(users);
  checkForChannelController
    .checkPrivateChannel(arrUsers)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});
module.exports = router;

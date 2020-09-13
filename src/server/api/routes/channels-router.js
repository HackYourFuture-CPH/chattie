const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const channelsController = require('../controllers/channels-controller');

/**
 * @swagger
 * /modules:
 *  post:
 *    summary: Create a channel
 *    description:
 *      Will create a channel.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: channel
 *        description: The channel to create.
 *        schema:
 *          type: object
 *          required:
 *              - created_at
 *              - updated_at
 *          properties:
 *            title:
 *              type: string
 *            created_at:
 *              type: string
 *              format: date-time
 *
 *            updated_at:
 *              type: string
 *              format: date-time
 *
 *            deleted_at:
 *              type: string
 *              format: date-time
 *
 *    responses:
 *      201:
 *        description: Channel created
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request.
 */
router.post('/', (req, res) => {
  channelsController
    .createChannel(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

module.exports = router;

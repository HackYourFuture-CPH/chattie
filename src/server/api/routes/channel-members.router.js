const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers

const channelMembersController = require('../controllers/channel-members.controller');

/**
 * @swagger
 * /channel-members:
 *  post:
 *    summary: Create channel members
 *    description:
 *      Will create a channel member.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: channel-member
 *        description: creates a channel memeber.
 *        schema:
 *          type: object
 *          required:
 *            - channelId
 *            - userId
 *          properties:
 *           - channelId:
 *                type: integer
 *                required: true
 *                description: the id of the channel to add the user
 *           - userId:
 *                type: integer
 *                required: true
 *                description: the id of the user to add to the channel
 *    responses:
 *      201:
 *        description: channel-member created
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request.
 */
router.post('/', (req, res) => {
  channelMembersController
    .createChannelMember(req.body)
    .then((result) => res.json(result))
    .catch(() => {
      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

module.exports = router;

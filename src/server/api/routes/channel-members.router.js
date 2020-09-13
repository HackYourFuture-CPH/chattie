const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const channelMembersController = require('../controllers/channel-members.controller');

/**
 * @swagger
 * /channel-member/{ID}:
 *  get:
 *    summary: Get channel members by ID
 *    description:
 *      Will return single channel member with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the channel member to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  channelMembersController
    .getChannelMemberById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;

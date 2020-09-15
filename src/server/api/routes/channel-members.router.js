const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers

const channelMembersController = require('../controllers/channel-members.controller');

/**
 * @swagger
 * /channel-members/{ID}:
 *  delete:
 *    summary: Delete a channel member
 *    description:
 *      Will delete a channel member with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the channel member to delete.
 *    responses:
 *      200:
 *        description: channel member deleted
 *      5XX:
 *        description: Unexpected error.
 *      404:
 *        description: channel member ID doesn't exist.
 */
router.delete('/:id', (req, res) => {
  channelMembersController
    .deleteChannelMember(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the channel member id does not exist
      if (result === 0) {
        res
          .status(404)
          .send('The channel member ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

/**
 * @swagger
 * /channel-members:
 *  post:
 *    summary: Create channel-members
 *    description:
 *      Will create a channel-member.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: channel-member
 *        description: create channel-memeber.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - startDate
 *            - endDate
 *             - classId
 *          properties:
 *            title:
 *              type: string
 *            startDate:
 *              type: string
 *              format: date-time
 *            endDate:
 *              type: string
 *              format: date-time
 *            classId:
 *              type: string
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

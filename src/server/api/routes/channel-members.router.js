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

module.exports = router;

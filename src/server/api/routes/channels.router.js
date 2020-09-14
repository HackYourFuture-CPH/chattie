const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const channelsController = require('../controllers/channels.controller');

/**
 * @swagger
 * /channels/{ID}:
 *  delete:
 *    summary: Delete a channel
 *    description:
 *      Will delete a channel with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the channel to delete.
 *    responses:
 *      200:
 *        description: channel deleted
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad Request.
 */
router.delete('/:id', (req, res) => {
  channelsController
    .deleteChannelById(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the channel id does not exist
      if (result === 0) {
        res.status(404).send('The channel ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;

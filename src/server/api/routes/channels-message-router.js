const express = require('express');

const router = express.Router({ mergeParams: true });

const channelsMessageController = require('../controllers/channels-message-controller');

/**
 * @swagger
 * /channels-message/last-messages:
 *  get:
 *    summary: Get channels last messages by user id
 *    description:
 *      Will return users last conversation with a matching user ID.
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: userId
 *       schema:
 *         type: string
 *         required: true
 *         description: The id of the user to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/last-messages', (req, res, next) => {
  channelsMessageController
    .getChannelsId(req.query.userId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;

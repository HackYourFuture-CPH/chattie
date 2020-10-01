const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const channelsController = require('../controllers/channels-controller');

/**
 * @swagger
 * /channels:
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
 *              - title
 *          properties:
 *            title:
 *              type: string
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
    .catch(() => {
      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

/**
 * @swagger
 * /channels/{ID}:
 *  get:
 *    summary: Get channels by ID
 *    description:
 *      Will return single channel with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the channel to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  channelsController
    .getChannelsById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /channels/:
 *  get:
 *    summary: Get channels
 *    description:
 *      Will return all or filtered channels
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: limit
 *       schema:
 *         type: integer
 *         description: The numbers of channels to return
 *     - in: query
 *       name: createdAfter
 *       schema:
 *         type: integer
 *         description: Get channels that has been created after the date
 *     - in: query
 *       name: searchWord
 *       schema:
 *         type: integer
 *         description: Get channel with a title that partially matches the specified search word
 *     - in: query
 *       name: sortDate
 *       schema:
 *         type: integer
 *         description: Get channels, sorted with the most recently created first
 *     - in: query
 *       name: sortMessages
 *       schema:
 *         type: integer
 *         description: Get channels, sorted by latest messages
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request.
 */
router.get('/', (req, res, next) => {
  channelsController
    .getFilteredChannels(req.query)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /channels/{ID}:
 *  patch:
 *    summary: edit a channel
 *    description:
 *      Will edit a channel.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the channel to patch.
 *      - in: body
 *        name: channel
 *        description: The channel to edit.
 *        schema:
 *          type: object
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
 *      200:
 *        description: channel was patched.
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad Request.
 */
router.patch('/:id', (req, res, next) => {
  channelsController
    .editChannel(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

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
    .deleteChannelById(req.params.id)
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

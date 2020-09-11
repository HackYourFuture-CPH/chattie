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
 */
router.post('/', (req, res) => {
  channelsController
    .createChannel(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

/**
 * @swagger
 * /channels:
 *  get:
 *    summary: Get all channels sorted alphabetically
 *    description:
 *      Will return all channels.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  channelsController
    .getChannels()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /channels:
 *  get:
 *    summary: Get channels, sorted with the most recently created first
 *    description:
 *      Will return id and title of the channels.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  channelsController
    .getRecentlyCreatedChannels()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /channels:
 *  get:
 *    summary: Get channels, sorted by latest messages
 *    description:
 *      Will return id and title of the channels.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  channelsController
    .getChannelsWithLatestMessages()
    .then((result) => res.json(result))
    .catch(next);
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
 *    summary: filter the channels
 *    description:
 *      Will return only specific channel
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
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  channelsController
    .getLimitNumberChannels(req.query.limit)
    .then((result) => res.json(result))
    .catch(next);
});

router.get('/', (req, res, next) => {
  channelsController
    .getCreatedAfterChannels(req.query.createdAfter)
    .then((result) => res.json(result))
    .catch(next);
});

router.get('/', (req, res, next) => {
  channelsController
    .getSpecifiedChannelsTitle(req.query.searchWord)
    .then((result) => res.json(result))
    .catch(next);
});

router.get('/', (req, res, next) => {
  channelsController
    .getLimitNumberChannels(req.query.limit)
    .getCreatedAfterChannels(req.query.createdAfter)
    .getSpecifiedChannelsTitle(req.query.searchWord)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;

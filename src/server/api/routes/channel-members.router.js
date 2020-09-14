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

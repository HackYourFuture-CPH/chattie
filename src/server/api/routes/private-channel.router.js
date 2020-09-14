const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const privateChannelController = require('../controllers/private-channel.controller');
/**
 * @swagger
 * /private-channel:
 *  post:
 *    summary: Create a private channel
 *    description:
 *      Will create a private channel.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: private channel
 *        description: The private channel to create.
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
 *        description: private channel created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  privateChannelController
    .createPrivateChannel(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res
        .status(400)
        .send('Bad request')
        .end();
    });
});
module.exports = router;

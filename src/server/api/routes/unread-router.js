const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const unReadMessagesController = require('../controllers/unread-controller');

/**
 * @swagger
 * /modules:
 *  post:
 *    summary: Get Unread_messages
 *    description:
 *      Get Unread_messages.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: unSean
 *        description: update Unread_messages.
 *        schema:
 *          type: object
 *          required:
 *              - title
 *          properties:
 *            title:
 *              type: integer
 *    responses:
 *      201:
 *        description: Get Unread_messagesd
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request.
 */

router.get('/', (req, res, next) => {
  unReadMessagesController
    .getUnReadMessages(req)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /modules:
 *  post:
 *    summary: update Unread_messages
 *    description:
 *      pdate Unread_messages.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: unSean
 *        description: update Unread_messages.
 *        schema:
 *          type: object
 *          required:
 *              - title
 *          properties:
 *            title:
 *              type: integer
 *    responses:
 *      201:
 *        description: Unread_messagesd
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request.
 */

router.patch('/:id', (req, res) => {
  unReadMessagesController
    .upDateUnReadMessages(req, req)
    .then((result) => res.json(result))
    .catch(() => {
      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

module.exports = router;

// router.post('/update/:id', unReadMessagesController.update);

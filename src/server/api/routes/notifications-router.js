const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const notificationsController = require('../controllers/notifications-controller');

/**
 * @swagger
 * /modules:
 *  post:
 *    summary: Create a Notification
 *    description:
 *      Will create a Notification.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: Notification
 *        description: The Notification to create.
 *        schema:
 *          type: object
 *          required:
 *              - title
 *          properties:
 *            title:
 *              type: string
 *    responses:
 *      201:
 *        description: Notification created
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request.
 */

router.post('/', (req, res) => {
  notificationsController
    .createNotification(req.body)
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
 * /notifications/{ID}:
 *  patch:
 *    summary: edit a notification
 *    description:
 *      Will edit a notification.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the notification to patch.
 *      - in: body
 *        name: notification
 *        description: The notification to edit.
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *                id:
 *              type: string
 *    responses:
 *      200:
 *        description: Notification was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res) => {
  notificationsController
    .editNotification(req.params.id, req.body)
    .then((result) => {
      // If result is equal to 0, then that means the channel member id does not exist
      if (result === 0) {
        res
          .status(400)
          .send(`notification ID '${req.params.id}' does not exist.`);
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;

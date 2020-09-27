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
 * /notification/{ID}:
 *  delete:
 *    summary: Delete a Notification
 *    description:
 *      Will delete a Notification with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the Notification to delete.
 *    responses:
 *      200:
 *        description: Notification deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  notificationsController
    .deleteNotification(req.params.id)
    .then((result) => {
      if (result === 0) {
        res.status(404).send('This type of notification does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;

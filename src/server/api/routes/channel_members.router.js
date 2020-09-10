const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const channelMembersController = require('../controllers/channel_members.controller');

/**
 * @swagger
 * /channel_members:
 *  get:
 *    summary: Get all channel_members
 *    description:
 *      Will return all channel_members.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  channelMembersController
    .getModules()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /channel_members/{ID}:
 *  get:
 *    summary: Get module by ID
 *    description:
 *      Will return single module with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the module to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  channelMembersController
    .getModuleById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /channel_members:
 *  post:
 *    summary: Create a module
 *    description:
 *      Will create a module.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: module
 *        description: The module to create.
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
 *        description: Module created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  channelMembersController
    .createChannelMember(req.body)
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
 * /channel_members/{ID}:
 *  patch:
 *    summary: Create a module
 *    description:
 *      Will create a module.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the module to patch.
 *      - in: body
 *        name: module
 *        description: The module to create.
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
 *        description: Module was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  channelMembersController
    .editModule(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /channel_members/{ID}:
 *  delete:
 *    summary: Delete a module
 *    description:
 *      Will delete a module with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the module to delete.
 *    responses:
 *      200:
 *        description: Module deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  channelMembersController
    .deleteModule(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the module id does not exist
      if (result === 0) {
        res.status(404).send('The module ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;

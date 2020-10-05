const express = require('express');

const router = express.Router({ mergeParams: true });

const channelsMessageController = require('../controllers/channels-message-controller');

router.get('/:userId', (req, res, next) => {
  channelsMessageController
    .getChannelsId(req.params.userId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;

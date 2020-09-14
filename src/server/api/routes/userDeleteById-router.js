const express = require('express');

const router = express.Router({ mergeParams: true });

const userDelete = require('../controllers/userDeleteById-controller');

router.delete('/:id', (req, res, next) => {
  userDelete
    .userDeleteById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});
module.exports = router;

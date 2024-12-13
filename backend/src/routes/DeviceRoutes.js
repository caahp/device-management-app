const express = require('express');
const deviceController = require('../controllers/DeviceController');

const router = express.Router();

router.get('/', deviceController.getAll);
router.post('/', deviceController.create);
router.delete('/:id', deviceController.delete);

module.exports = router;

const express = require('express');
const deviceController = require('../controllers/DeviceController');

const router = express.Router();

router.get('/', deviceController.getAll);
router.post('/', deviceController.create);
router.delete('/:id', deviceController.delete);
router.get('/total', deviceController.getTotalDevicesByCategory);

module.exports = router;

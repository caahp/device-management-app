const express = require('express');
const categoryController = require('../controllers/CategoryController');

const router = express.Router();

router.get('/', categoryController.getAll);
router.post('/', categoryController.create);
router.delete('/:id', categoryController.delete);

module.exports = router;



const express = require('express');
const { updateStatus } = require('../controllers/statusController');
const router = express.Router();

router.post('/update', updateStatus);

module.exports = router;

const express = require('express');
const adminControllers = require('../controllers/adminController');
const router = express.Router();

router.get('/admin/reset_database/:token',adminControllers.resetDatabase);

module.exports = router;
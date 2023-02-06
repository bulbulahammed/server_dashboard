const express = require('express');
const router = express.Router();
const { getDashData} = require('../controllers/dataController');

router.route('/').get(getDashData);

module.exports = router;

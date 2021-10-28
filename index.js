const express = require('express');
const router = express.Router();
const cont = require('../controllers/adminsignup')


require('./admin')(router);

module.exports = router;
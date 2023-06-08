const express = require('express');

const ctrlUsers = require('../../controllers/users');

const router = express.Router();

router.get('/', ctrlUsers.test);

module.exports = router;

var express = require('express');
var router = express.Router();

const LoginController = require('./../controllers/LoginController');
const RegisterController = require('./../controllers/RegisterController');
const SemesterController = require('./../controllers/SemesterController');
const UserController = require('./../controllers/UserController');

router.post('/login', LoginController);
router.post('/register', RegisterController);
router.get('/me', UserController);
//router.get('/user/{id}', UserController);
//router.post('/user/{id}', UserController);
router.get('/semester/{id}', SemesterController);
router.post('/semester/{id}', SemesterController);
router.put('/user/{id}/semester', SemesterController);

module.exports = router;

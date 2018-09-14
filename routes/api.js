var express = require('express');
var router = express.Router();

const LoginController = require('./../controllers/LoginController');
const RegisterController = require('./../controllers/RegisterController');
const StudentController = require('./../controllers/StudentController');
const SemesterController = require('./../controllers/SemesterController');
const UserController = require('./../controllers/UserController');

router.post('/login', LoginController);
router.post('/register', RegisterController);
router.get('/me', StudentController);
router.get('/student/{id}', StudentController);
router.post('/student/{id}', StudentController);
router.get('/me', UserController);
router.get('/semester/{id}', SemesterController);
router.post('/semester/{id}', SemesterController);

module.exports = router;

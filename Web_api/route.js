express = require('express');
app = express();
const singUpCntrl = require('./controllers/signUp.controller')

router = express.Router();

router.post('/signup', singUpCntrl.register)
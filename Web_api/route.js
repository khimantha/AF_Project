express = require('express');
bodyParser = require('body-parser');
app = express();
const singUpCntrl = require('./controllers/User.controller')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router = express.Router();

router.post('/signup', singUpCntrl.register);



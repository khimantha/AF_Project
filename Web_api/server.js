express = require('express');
app = express();
bodyParser = require('body-parser');
mongoose = require('mongoose');
cors = require('cors');
var passport = require('passport');


const url = 'mongodb://localhost:27017';
const dbname = 'AF';
mongoose.connect('mongodb://localhost:27017/AF', { useNewUrlParser: true })
app.use(cors());

app.use(passport.initialize());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use('/', router);

port = process.env.port || 3000;


app.listen(port);
console.log('Running port ' + port);
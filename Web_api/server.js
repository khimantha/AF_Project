express = require('express');
app = express();

mongoose = require('mongoose');
cors = require('cors');
var passport = require('passport');
var router = require('./route');


const url = 'mongodb://localhost:27017';
const dbname = 'AF';
mongoose.connect('mongodb://localhost:27017/AF', { useNewUrlParser: true })
app.use(cors());

app.use(passport.initialize());


app.use('/', router);

port = process.env.port || 3000;


app.listen(port);
console.log('Running port ' + port);
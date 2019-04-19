var http = require('http');
process.title = "startup";
const path = require('path');
let nodemon = require('nodemon');
var cors = require('cors')

var express = require('express'),

    port = 3000,
    routes = require('./routes/index'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

require('./model/model');
mongoose.connect('mongodb://localhost:27017/Startup');


var session = require('express-session');
var app = express();
// mongoose instance connection url connection

var session = require('express-session');
var app = express();
// mongoose instance connection url connection
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(cors());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.use(session({secret: 'ssshhhhh'}));
console.log('Application running on http://localhost:'+port);

app.listen(port);
routes(app);




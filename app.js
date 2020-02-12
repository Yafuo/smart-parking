const express = require('express');
const path = require('path');
// ****
var {checkLogin} = require('./custom_lib/authenticate');
var {hash, compare} = require('./custom_lib/bcrypt');
var {verify, sign} = require('./custom_lib/jwt');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
//*

const app = express();
// **** + Line 29
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);
io.on('connection', function (socket) {
  console.log('You are connected!');
});
// *

// ****
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// *

// ****
mongoose.connect('mongodb://localhost:27017/real'
  , {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true}).then(r => {
  console.log('Database connect successfully');
}).catch(err => console.log(err));
// *

// ****
app.use('/api', indexRouter);
// *


// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/smart-parking'));

app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname+ '/dist/smart-parking/index.html'));
});
// Start the app by listening on the default Heroku port
// **** Change from app.listen -> server.listen for socket to be runable
server.listen(process.env.PORT || 8080);
// *

// ****
module.exports = {app, io};
// *

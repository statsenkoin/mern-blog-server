const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const authRouter = require('./routes/api/auth');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(
  logger('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'server.log')),
  })
);

// routes
app.use('/api/users', authRouter);

// app.get('/', (req, res) => {
//   res.json('hello server');
// });

module.exports = app;

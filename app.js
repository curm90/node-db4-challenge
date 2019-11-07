const express = require('express');
const helmet = require('helmet');

const menuRouter = require('./src/routers/menuRouter');

const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server running');
});

app.use('/api/menu', menuRouter);

module.exports = app;

const express = require('express');
const helmet = require('helmet');

const Menu = require('./src/helpers/menuModel');

const menuRouter = require('./src/routers/menuRouter');

const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server running');
});

app.get('/api/ingredients/:id/menu', async (req, res, next) => {
  try {
    const { id } = req.params;
    const meal = await Menu.getMealsWithIngredients(id);
    console.log(meal);
  } catch (error) {
    next(error);
  }
});

app.use('/api/menu', menuRouter);

module.exports = app;

const express = require('express');
const Menu = require('../helpers/menuModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const menu = await Menu.getRecipes();
    res.status(200).json(menu);
  } catch (error) {
    next(error);
  }
});

router.get('/:id/shoppingList', async (req, res, next) => {
  try {
    const { id } = req.params;
    const shoppingList = await Menu.getShoppingList(id);
    res.status(200).json(shoppingList);
  } catch (error) {
    next(error);
  }
});

router.get('/:id/instructions', async (req, res, next) => {
  try {
    const { id } = req.params;
    const instructions = await Menu.getInstructions(id);
    res.status(200).json(instructions);
  } catch (error) {
    next(error);
  }
});

router.get('/ingredients/:id/menu', async (req, res, next) => {
  try {
    const { id } = req.params;
    const meals = await Menu.getMealsWithIngredients(id);
    res.status(200).json(meals);
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res) => {
  res.status(500).json({ message: 'Could not process request ' + err.message });
});

module.exports = router;

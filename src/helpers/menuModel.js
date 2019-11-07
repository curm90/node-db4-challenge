const db = require('../db.config');

module.exports = {
  getRecipes() {
    return db('menu');
  },
  getShoppingList(menu_id) {
    return db('meal_ingredients as mi')
      .join('ingredients as i', 'i.id', 'mi.ingredient_id')
      .select('i.ingredient', 'mi.quantity', 'mi.unit')
      .where({ 'mi.meal_id': menu_id });
  },
  getInstructions(menu_id) {
    return db('instructions as i')
      .select('i.instruction_number', 'instruction')
      .where({ 'i.meal_id': menu_id });
  },
  getMealsWithIngredients(ingredient) {
    return db('menu as m')
      .join('meal_ingredients as mi', 'mi.id', 'm.id')
      .join('ingredients as i', 'i.id', 'm.id')
      .select('m.meal_name')
      .where({ 'i.id': ingredient });
  }
};

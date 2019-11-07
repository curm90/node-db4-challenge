exports.up = function(knex) {
  return knex.schema
    .createTable('menu', tbl => {
      tbl.increments();
      tbl
        .text('meal_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl
        .integer('instruction_number')
        .unsigned()
        .notNullable();
      tbl.text('instruction').notNullable();
      tbl
        .integer('meal_id')
        .notNullable()
        .references('id')
        .inTable('menu')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .text('ingredient')
        .unique()
        .notNullable();
    })
    .createTable('meal_ingredients', tbl => {
      tbl.increments();
      tbl
        .integer('meal_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('menu')
        .onDelete('CASCADE');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE');
      tbl
        .integer('quantity')
        .unsigned()
        .notNullable();
      tbl
        .text('unit')
        .unsigned()
        .notNullable();
    });
};
exports.down = function(knex) {
  return knex
    .dropTableIfExists('menu')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('meal_ingredients');
};

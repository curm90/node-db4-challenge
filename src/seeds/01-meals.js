exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('menu').insert([
        { meal_name: 'chicken soup' },
        { meal_name: 'steak and chips' },
        { meal_name: 'omlete' }
      ]);
    });
};

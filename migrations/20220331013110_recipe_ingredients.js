exports.up = function (knex) {
  return knex.schema.createTable('recipe_ingredients', (table) => {
    table.increments('id').primary()
    table.integer('recipes_id')
    table.integer('ingredients_id')
    table.string('amount')
    table.string('specifics')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('recipe_ingredients')
}

exports.up = function (knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id').primary()
    table.string('author_name')
    table.string('cooking_time')
    table.string('instructions')
    table.string('title')
    table.string('description')
    table.string('difficulty')
    table.string('img')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('recipes')
}

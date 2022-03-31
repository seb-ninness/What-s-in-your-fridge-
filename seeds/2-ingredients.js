exports.seed = async function (knex) {
  return knex('ingredients').insert([
    { id: 8001, ingredient: 'Garlic Cloves(s)' },
    { id: 8002, ingredient: 'Lemon(s)' },
    { id: 8003, ingredient: 'Olive Oil' },
    { id: 8004, ingredient: 'Butter' },
    { id: 8005, ingredient: 'Onion' },
    { id: 8006, ingredient: 'Anchovies' },
    { id: 8007, ingredient: 'Capers' },
    { id: 8008, ingredient: 'Red Chilli Flakes' },
    { id: 8009, ingredient: 'Pasta' },
    { id: 8010, ingredient: 'Parsley' },
    { id: 8011, ingredient: 'Chives' },
    { id: 8012, ingredient: 'Parmesan' },
  ])
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('myDeck', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('card_id')
    table.string('name')
    table.string('img_url')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('myDeck')
}
const knex = require('../knex');

const createTables = () => {
    knex.schema.hasTable('transaction').then((exists) => {
        if (!exists) {
            return knex.schema.createTable('transaction', (t) => {
                t.increments('transaction_id').primary();
                t.string('type', 100);
                t.bigInteger('amount');
                t.string('effectiveDate', 100);
            });
        }
    }).then(()=> {
        knex.schema.hasTable('balance').then((exists) => {
            if (!exists) {
                return knex.schema.createTable('balance', (t) => {
                    t.increments('balance_id').primary();
                    t.bigInteger('amount');
                });
            }
        })
    });
}

module.exports = {
    createTables
}
const knex = require('../knex');
const logger = require('log')

const getAmountById = (balance_id) => {
	logger.info('balance.db.js inside getAmountById method')
    return knex('balance').where({balance_id}).select('balance_id', 'amount')
}

const updateAmount = (balance_id, amount) => {
	logger.info('balance.db.js inside updateAmount method')
    return knex("balance").where({balance_id}).update({amount})
}

const createAmount = (amount) => {
	logger.info('balance.db.js inside createAmount method')
    return knex("balance").insert({amount})
}

module.exports = {
    getAmountById,
    updateAmount,
    createAmount
}
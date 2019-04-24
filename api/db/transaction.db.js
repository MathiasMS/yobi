const knex = require('../knex')
const logger = require('log')

const createTransaction = (amount, type, effectiveDate) => {
	logger.info('transaction.db.js inside createTransaction method')
    return knex("transaction").insert({amount, type, effectiveDate})
}

const getAllTransactions = () => {
	logger.info('transaction.db.js inside getAllTransactions method')
    return knex('transaction').select('transaction_id', 'type', 'amount', 'effectiveDate')
}

const getTransactionById = (transaction_id) => {
	logger.info('transaction.db.js inside getTransactionById method')
    return knex('transaction').where({transaction_id}).select('transaction_id', 'type', 'amount', 'effectiveDate')
}

module.exports = {
    createTransaction,
    getAllTransactions,
    getTransactionById
}
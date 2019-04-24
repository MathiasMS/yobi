const transactionDb = require('../db/transaction.db')
const logger = require('log')
const error = require('../errors/index')

const createTransaction = (transaction) => {
    logger.info('transactionService.js inside createTransaction method')
    const date = new Date()
    const isoDate = date.toISOString()

    const { amount, type } = transaction

    return transactionDb.createTransaction(amount, type, isoDate)
}

const getAllTransactions = () => {
    logger.info('transactionService.js inside getAllTransactions method')
    return transactionDb.getAllTransactions()
}

const getTransactionById = (id) => {
    logger.info('transactionService.js inside getTransactionById method')
    if(isNaN(id)) return Promise.reject(error.httpError('invalid ID supplied', 400))

    return transactionDb.getTransactionById(id)

}

module.exports = {
    createTransaction,
    getAllTransactions,
    getTransactionById
}
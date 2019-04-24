const express = require('express');
const router = express.Router();
const { createTransaction, getAllTransactions, getTransactionById} = require('../services/transactionService')
const { updateAmount } = require('../services/balanceService')
const { validate } = require('../utils/validator')
const logger = require('log')
const error = require('../errors/index')

/* GET home page. */
router.get('/', (req, res, next) =>{

    return getAllTransactions()
        .then((transactions) => {
            res.status(200).json(transactions)
        })
        .catch((error)=>{
            logger.error('transaction.js GET method', error)
            next(error)
        })
});

router.get('/:id', (req, res, next) =>{
    const { id } = req.params

    return getTransactionById(id)
        .then((transactions) => {
            if(transactions.length > 0){
                res.status(200).json(transactions)
            }else{
                logger.error('transaction.js GET ByIdMethod')
                next(error.httpError('transaction not found', 404))
            }

        })
        .catch((error)=>{
            logger.error('transaction.js GET method', error)
            next(error)
        })
});

router.post('/', validate, (req, res, next) =>{

    const { body } = req

    return updateAmount(body)
        .then(() => {
            return createTransaction(body)
        })
        .then(()=> res.status(200).send('transaction stored'))
        .catch((error)=>{
            logger.error('transaction.js POST method', error)
            next(error)
        })

});

module.exports = router;

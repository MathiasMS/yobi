const balanceDb = require('../db/balance.db')
const logger = require('log')
const error = require('../errors/index')

const updateAmount = (transaction) => {
    logger.info('balanceService.js inside updateAmount method')
    const { amount, type } = transaction
    const id = 1 // Such we do not handle users and we only have 1 amount record we can hard coding the id

    return balanceDb.getAmountById(id)
        .then((balances)=> {
            console.log('hi',balances)
            if(balances.length !== 0){
                const balanceById = balances[0]
                const newAmount = type === 'credit' ? balanceById.amount + amount : balanceById.amount - amount

                if(newAmount < 0) return Promise.reject(error.httpError('the amount cannot be negative', 409))

                return balanceDb.updateAmount(id, newAmount)
            }else{
                console.log('bye')
                if(type === 'debit') return Promise.reject(error.httpError('the amount cannot be negative', 409))
                return balanceDb.createAmount(amount)
            }
    })
}

module.exports = {
    updateAmount
}
const { checkBody, validationErrors } = require('express-validator/check')
const logger = require('log')

const validate = (req, res, next) => {
	logger.debug('validator.js inside validate method')
	req.checkBody('type').notEmpty()
	req.checkBody('type').isIn(['debit', 'credit'])
	req.checkBody('amount').isInt({ gt: 0 })

 	const errors = req.validationErrors()

	if(errors) {
		logger.error('validator.js error', errors[0].msg)
		res.status(400).send('invalid input')
	}else{
		next()
	}

}

module.exports = {
	validate
}
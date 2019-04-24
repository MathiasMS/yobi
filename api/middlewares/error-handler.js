const errorHandler = (err, req, res, next) => {
    const { code, description } = err
    res.status(code).json(description);
}

module.exports = {
    errorHandler
}
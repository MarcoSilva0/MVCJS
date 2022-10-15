exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Vim pelo middleware'
    next();
}
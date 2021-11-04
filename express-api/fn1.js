const fn = (req, res, next) => {
    return res.render('test', {
        pageTitle: req.app.locals.pageTitle
    })
}

module.exports = fn
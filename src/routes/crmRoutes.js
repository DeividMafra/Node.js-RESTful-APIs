const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Resquet from: ${req.originalUrl}`)
            console.log(`Resquet type: ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send('GET resquest successful!')
        })

        .post((req, res) =>
            res.send('POST resquest successful!'))

    app.route('/contact/:contactID')
        .put((req, res) =>
            res.send('PUT resquest successful!'))

        .delete((req, res) =>
            res.send('DELETE resquest successful!'))
}

export default routes;
import { addNewContact, getListContact, getOneContact, updateContact, removeContact } from '../controllers/crmControllers'

const routes = (app) => {
    app.route('/getListContact')
        .get((req, res, next) => {
            // middleware
            console.log(`Resquet from: ${req.originalUrl}`)
            console.log(`Resquet type: ${req.method}`)
            next();
        }, getListContact)

    app.route('/getContact/:contactID')
        .get((req, res, next) => {
            // middleware
            console.log(`Resquet from: ${req.originalUrl}`)
            console.log(`Resquet type: ${req.method}`)
            next();
        }, getOneContact)

    app.route('/setContact')
        .post(addNewContact);

    app.route('/updContact/:contactID')
        .put(updateContact)

    app.route('/delContact/:contactID')
        .delete(removeContact)
}

export default routes;
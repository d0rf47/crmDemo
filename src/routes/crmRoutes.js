//Contains main contact routes for adding, deleting or getting a contact
import { 
    addNewContact, 
    getContacts,
    getContactID,
    updateContact
    } from '../controllers/crmControllers';

const Routes = (app) =>
    {
        app.route('/contact')
            .get((req,res, next)=>
            {
                console.log(`Request from ${req.originalUrl}`)
                console.log(`Request type  ${req.method}`)
                next();                
            }, getContacts)

            .post(addNewContact);
        
        app.route('/contact/:contactID')

            .get(getContactID)

            .put(updateContact)
            
            .delete((req,res)=>
            {
                res.send("DELETE Request successful")
            });

    };

export default Routes;
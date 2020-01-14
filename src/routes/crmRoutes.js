//Contains main contact routes for adding, deleting or getting a contact
import { 
    addNewContact, 
    getContacts,
    getContactID,
    updateContact,
    deleteContact
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
            //To Add New Contact
            .post(addNewContact);
        
        app.route('/contact/:contactID')
            //Get a specific Contact
            .get(getContactID)
            //Update a specific Contact
            .put(updateContact)
            //Remove a specific contact
            .delete(deleteContact);

    };

export default Routes;
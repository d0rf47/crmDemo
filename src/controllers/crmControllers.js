//Passed to POST route to add new Contact to the Database
import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModels';

//CTOR for new Contacts to be added
const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) =>
{
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => (err) ? res.send(err) : res.json(contact));
};


export const getContacts = (req, res) =>
{
    Contact.find({}, (err, contact) => (err) ? res.send(err) : res.json(contact));
};

export const getContactID = (req, res) =>
{
    Contact.findById( req.params.contactID, (err, contact) => (err) ? res.send(err) : res.json(contact));
};

export const updateContact = (req, res) =>
{
    Contact.findOneAndUpdate( { _id: req.params.contactID}, req.body, { new: true, useFindAndModify: false},
        (err, contact) => (err) ? res.send(err) : res.json(contact));
};
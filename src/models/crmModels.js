//CRM Schema
// Schemas are used to define the structure of data that will be accepted into our Database

import  mongoose  from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({

    firstName:
    {
        type: String,
        required: 'Enter a first Name'
    },
    lastName:
    {
        type: String,
        required: 'Enter a last Name'
    },
    email:
    {
        type:String
    },
    company:
    {
        type:String
    },
    phone:
    {
        type:Number
    },
    timestamp:
    {
        type:Date,
        default: Date.now()
    }
});
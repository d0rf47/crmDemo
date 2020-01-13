const express = require('express');
const mongoose = require('mongoose');

require("dotenv").config({path:'./config/keys.env'});

const dbURL = `mongodb+srv://admin:${process.env.pass}@cluster0-fbjsx.azure.mongodb.net/test?retryWrites=true&w=majority`

const PORT = process.env.PORT || 4000;

const app = express();


mongoose.connect(dbURL,{ useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>
    {
     console.log('Database Connected');
        
    })
    .catch(err=>
    {
    console.log(`Connection Error: ${err} ${process.env.pass}`);
})

app.listen(PORT, ()=>
{
    console.log(`Server listening on ${PORT} `);
})

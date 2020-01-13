import express from 'express';
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
import routes from './src/routes/crmRoutes';
require("dotenv").config({path:'./config/keys.env'});
const dbURL = `mongodb+srv://admin:${process.env.pass}@cluster0-fbjsx.azure.mongodb.net/CRM?retryWrites=true&w=majority`
const PORT = process.env.PORT || 4000;
const app = express();

//Mongoose Connection 
mongoose.Promise = global.Promise;
mongoose.connect(dbURL,
    {   useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(()=>
    {
        console.log('Database Connected');
        
    })
    .catch(err=>
    {
        console.log(`Connection Error: ${err}`);
    }
);

//Parses incoming data into a readable JSON format
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Imported Routes
routes(app);

app.get('/', (req,res)=>
{
    res.send('testing')
})


//Server Connection
app.listen(PORT, ()=>
{
    console.log(`Server listening on ${PORT} `);
})

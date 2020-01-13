import express from 'express';
import { connect } from 'mongoose';
import { json } from 'body-parser';
import routes from './src/routes/crmRoutes';
require("dotenv").config({path:'./config/keys.env'});
const dbURL = `mongodb+srv://admin:${process.env.pass}@cluster0-fbjsx.azure.mongodb.net/test?retryWrites=true&w=majority`
const PORT = process.env.PORT || 4000;
const app = express();
app.use(json());

connect(dbURL,{ useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>
    {
        console.log('Database Connected');
        
    })
    .catch(err=>
    {
        console.log(`Connection Error: ${err}`);
    }
);

routes(app);

app.get('/', (req,res)=>
{
    res.send('testing')
})



app.listen(PORT, ()=>
{
    console.log(`Server listening on ${PORT} `);
})

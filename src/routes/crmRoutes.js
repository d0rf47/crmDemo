//Contains main contact routes for adding, deleting or getting a contact
const Routes = (app) =>
    {
        app.route('/contact')
            .get((req,res, next)=>
            {
                console.log(`Request from ${req.originalUrl}`)
                console.log(`Request type  ${req.method}`)
                next();                
            }, (req,res,next)=>{
                res.send("GET Request successful")
            })
            .post((req,res)=>
            {
                res.send("POST Request successful")
            });
        
        app.route('/contact/:contactID')
            .put((req,res)=>
            {
                res.send("PUT Request successful")
            })
            .delete((req,res)=>
            {
                res.send("DELETE Request successful")
            });

    };

export default Routes;
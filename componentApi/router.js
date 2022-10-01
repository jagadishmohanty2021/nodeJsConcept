// module.exports=(app)=>{

// app.use('/api',(req,res,next)=>{
//     let path=req.path.split('/');
//     console.log("path: ",path)
//     app.use(`${path[1]}`,require(`./api/${path[1]}/routes`)(path[2]))
//     next()
// })

// }

module.exports = (app,req) => {
    let path=req;
   
    // app.use("/user", require('./api/getData/routes'));
    if(path){
    app.use("/getData", require(`./api/${path[1]}/routes`));

    // app.use(`${path[1]}`,require(`./api/${path[1]}/routes`))
    }
    // app.use("/cleaner", require('./cleaner')); 
};
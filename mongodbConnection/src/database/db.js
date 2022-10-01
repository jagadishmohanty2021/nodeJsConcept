const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongocurd',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((db)=>{
    console.log("mongodb connected")
}).catch((err)=>{
    console.log(err);
})
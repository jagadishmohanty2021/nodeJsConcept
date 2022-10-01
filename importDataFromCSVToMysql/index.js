const express = require('express');
const app = express();
// const Router=express.Router()

const sequelize = require('./db');

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',require('./router'))

sequelize.sync();

// app.get('/', (req, res) => {
//     res.send("Application working")
// })




app.listen(3000, () => {
    console.log("server connected")
})
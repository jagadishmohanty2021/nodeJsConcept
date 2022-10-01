const Router=require('express').Router()
const controller=require('../controller/controller')()

Router.post('/create',controller.create)
Router.get('/read',controller.read)
Router.put('/update/:id',controller.update)
Router.delete('/delete/:id',controller.delete)
Router.get('/agg/:age',controller.agreegate)

module.exports=Router;
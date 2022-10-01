const Router=require('express').Router()
const controller=require('./controller')()

Router.get('/read',controller.read)
Router.post('/create',controller.create)
Router.delete('/delete/:id',controller.delete)
Router.put('/update/:id',controller.update)


module.exports=Router;
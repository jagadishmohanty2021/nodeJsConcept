const {Sequelize}=require('sequelize')

const sequelize=new Sequelize('demoimport','root','root',{
    dialect:'mysql'
})

module.exports=sequelize;
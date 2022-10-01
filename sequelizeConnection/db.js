const { Sequelize } = require('sequelize');

const sequelize=new Sequelize("sequelizedemo","root","root",{
    dialect:'mysql'
})

module.exports=sequelize;

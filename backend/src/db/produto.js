const Sequelize  = require('sequelize')
const sequelize = require("./db")

const Produto = sequelize.define("produto",{
    date:{
        type:Sequelize.DATE,
        allowNull:false
    },
    open:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    high:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    low:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    close:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    volume:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    status:{
        type:Sequelize.STRING,
        allowNull:true
    }

})

module.exports = Produto
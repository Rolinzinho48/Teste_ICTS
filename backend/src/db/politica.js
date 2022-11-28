const Sequelize  = require('sequelize')
const sequelize = require("./db")

const Politica = sequelize.define("politica",{
    valorOtimo:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    valorCritico:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
    

})

module.exports = Politica
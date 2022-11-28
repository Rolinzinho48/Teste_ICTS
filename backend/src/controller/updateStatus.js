const politic = require("../db/politica")


const getStatus = async(value) =>{
    
    const politica = await politic.findByPk(1)

    console.log(politica.dataValues.valorOtimo)
        if(value>politica.dataValues.valorOtimo){
            return "Otimo"
        }
        else if(value<politica.dataValues.valorCritico){
            return "Critico"
        }
        else{
            return "Bom"
        }
    
}

module.exports = getStatus
const express = require('express')
const router = express.Router()

const politic = require("../db/politica")
const product = require("../db/produto")
const getStatus = require("../controller/updateStatus")

router.post('/',async(req,res)=>{
    
    try{
        const pol = await politic.create({
            valorOtimo:req.body.valorOtimo,
            valorCritico:req.body.valorCritico
        })
       
        res.status(200).send("Cadastrado com sucesso!")
    }catch(error){
        res.status(400).send({mensage:error.message})
    }
    
})

router.patch('/',async(req,res)=>{
    try{
        const prod = await product.findAll()
        const pol = await politic.findByPk(1)

        pol.update({
            valorOtimo:req.body.valorOtimo,
            valorCritico:req.body.valorCritico
        })

        prod.forEach(async(element) => {
            element.update({
                status:await getStatus(element.volume)
            })
        })
        res.status(200).send({mensage:"Politica Atualizada"})

    }catch(error){
        res.status(400).send({mensage:error.message})
    }
})
router.get('/',async(req,res)=>{
    try{
        const pol = await politic.findByPk(1)
        if(pol != null){
            res.status(200).send(pol);
        }
        else{
            await politic.create({
                valorOtimo:req.body.valorOtimo,
                valorCritico:req.body.valorCritico
            })
        }
    }catch(error){
        res.status(400).send({mensage:error.message})
    }
})

module.exports = router
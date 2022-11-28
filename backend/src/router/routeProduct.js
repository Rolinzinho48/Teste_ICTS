const express = require('express')
const router = express.Router()


const product = require("../db/produto")
const getStatus = require("../controller/updateStatus")

router.post('/',async(req,res)=>{
    
    try{
        const data = req.body
       
        data.forEach(async(e)=>{ 
            const prod = await product.create({
                date:e.date,
                open:e.open,
                high:e.high,
                low:e.low,
                close:e.close,
                volume:e.volume,
                status:await getStatus(e.volume)
            })
        })
        
       
        res.status(200).send("Criado com sucesso!")
    }catch(error){
        res.status(400).send({mensage:error.message})
    }
    
})


router.get("/",async(req,res)=>{
    const prod = await product.findAll()
    res.send(prod)
})


module.exports = router
const shoes = require("../models/shoes-model");

const getAllShoes = async(req,res)=>{
    await shoes.find({})
    .then((shoe,error)=>{
        if (error) return res.status(400).json({success:false,error})
        if (shoe.length == 0) return res.json({success:false,massage:"no shoes found"})
        res.status(200).json({success:true,clothe}) 
    })
}













module.exports ={
    getAllShoes
}
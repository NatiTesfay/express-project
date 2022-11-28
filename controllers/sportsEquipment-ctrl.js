const sportsEquipment = require("../models/sportsEquipment-model");

const getAllSportsTolls = async(req,res)=>{
    await sportsEquipment.find({})
    .then((sportTool,error)=>{
        if (error) return res.status(400).json({success:false,error})
        if (sportTool.length == 0) return res.json({success:false,massage:"no sportTools found"})
        res.status(200).json({success:true,clothe}) 
    })
}














module.exports ={
    getAllSportsTolls
}
const sportsEquipment = require("../models/sportsEquipment-model");


const getAllSportsEquipment = async(req,res)=>{
    console.log("work")
      await sportsEquipment.find({})
      .then((result,error)=>{
          if (error) return res.status(400).json({success:false,error})
          if (result.length == 0) return res.json({success:false,massage:"no sportsEquipment found"})
          return res.status(200).json({success:true,result}) 
      })
  }
  
  const addSportsEquipment = async (req, res) => {
      await sportsEquipment
        .insertMany(req.body.data)
        .then(() => {
          res.status(200).json({ success: true, message: "sportsEquipment has added" });
        })
        .catch((error) => res.status(400).json({ success: false, message: error }));
    };
    
  module.exports ={
    getAllSportsEquipment,
    addSportsEquipment,
  }








module.exports ={
    getAllSportsTolls
}
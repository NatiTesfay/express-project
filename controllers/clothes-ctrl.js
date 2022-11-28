const clothes = require("../models/clothes-model");

const getAllClothes = async(req,res)=>{
    await clothes.find({}).then((result,error)=>{
        if (error) return res.status(400).json({success:false,error})
        if (result.length == 0) return res.json({success:false,massage:"no clothes found"})
        res.status(200).json({success:true,result}) 
    })
}

const addClothes = async (req, res) => {
    await clothes
      .insertMany(req.body.data)
      .then(() => {
        res.status(200).json({ success: true, message: "clothes has added" });
      })
      .catch((error) => res.status(400).json({ success: false, message: error }));
  };
  









module.exports ={
    getAllClothes,
    addClothes,
}
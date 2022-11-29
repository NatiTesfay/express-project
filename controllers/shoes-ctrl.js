const shoes = require("../models/shoes-model");

const getAllShoes = async(req,res)=>{
    console.log("work")
      await shoes.find({})
      .then((result,error)=>{
          if (error) return res.status(400).json({success:false,error})
          if (result.length == 0) return res.json({success:false,massage:"no shoes found"})
          return res.status(200).json({success:true,result}) 
      })
  }
  
  const addShoes = async (req, res) => {
      await shoes
        .insertMany(req.body.data)
        .then(() => {
          res.status(200).json({ success: true, message: "shoes has added" });
        })
        .catch((error) => res.status(400).json({ success: false, message: error }));
    };
    
  module.exports ={
    getAllShoes,
    addShoes,
  }









module.exports ={
    getAllShoes
}
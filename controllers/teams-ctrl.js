const teams = require("../models/teams-model");


const getAllTeam = async(req,res)=>{
    console.log("work")
      await teams.find({})
      .then((result,error)=>{
          if (error) return res.status(400).json({success:false,error})
          if (result.length == 0) return res.json({success:false,massage:"no teams found"})
          return res.status(200).json({success:true,result}) 
      })
  }
  
  const addTeam = async (req, res) => {
      await teams
        .insertMany(req.body.data)
        .then(() => {
          res.status(200).json({ success: true, message: "teams has added" });
        })
        .catch((error) => res.status(400).json({ success: false, message: error }));
    };
    
  module.exports ={
    getAllTeam,
    addTeam,
  }
const teams = require("../models/teams-model");


const getAllTeams = async(req,res)=>{
    await teams.find({})
    .then((someTeam,error)=>{
        if (error) return res.status(400).json({success:false,error})
        if (someTeam.length == 0) return res.json({success:false,massage:"no someTeams found"})
        res.status(200).json({success:true,clothe}) 
    })
}






module.exports ={
    getAllTeams
}
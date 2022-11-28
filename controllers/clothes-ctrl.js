const clothes = require("../models/clothes-model");

const getAllClothes = async(req,res)=>{
    await clothes.find({})
    .then((clothe,error)=>{
        if (error) return res.status(400).json({success:false,error})
        if (clothe.length == 0) return res.json({success:false,massage:"no clothes found"})
        res.status(200).json({success:true,clothe}) 
    })
}

const getClothesById = async(req,res)=>{}

const deleteClothes = async(req,res)=>{}

const upDateClothes = async(req,res)=>{}

const postClothesBy = async(req,res)=>{}







module.exports ={
    getAllClothes,
    getClothesById,
    deleteClothes,
    upDateClothes,
    postClothesBy,
}
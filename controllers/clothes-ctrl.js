const clothes = require("../models/clothes-model");
const bcrypt = require("jsonwebtoken")
const jwt = require("../vlidation/register")
const Validation = require("../vlidation/register")
const login = require("../vlidation/login")


const register = async (req,res) => {
  const {isEmpty,errors} = Validation(req.body.user)
  if (!isEmpty) return res.status(400).json(errors)

}

const getAllClothes = async(req,res)=>{
  console.log("work")
    await clothes.find({})
    .then((result,error)=>{
        if (error) return res.status(400).json({success:false,error})
        if (result.length == 0) return res.json({success:false,massage:"no clothes found"})
        return res.status(200).json({success:true,result}) 
    })
};

const getClothesById = async (req, res) => {
  await clothes.findById(req.params.id)
      .then(book => {
          if (!book) {
              return res.json({ success: false, massage: "clothes is not available" })
          }
          return res.status(200).json({ success: true, book })
      })
      .catch(error => res.status(400).json({ success: false, error }))
};

const addClothes = async (req, res) => {
    await clothes
      .insertMany(req.body.data)
      .then(() => {
        res.status(200).json({ success: true, message: "clothes has added" });
      })
      .catch((error) => res.status(400).json({ success: false, message: error }));
};

const updateClothes = async (req, res) => {
  await clothes.findByIdAndUpdate(req.params.id, req.body.book)
      .then(result => res.status(200).json({ success: true, result }))
      .catch(error => res.status(400).json({ success: false, error }))
}

const deleteClothes = async (req, res) => {
  await clothes.findByIdAndDelete(req.params.id)
      .then(() => res.status(300).json({ success: true }))
      .catch(error => res.status(400).json({ success: false ,error}))
}


  
module.exports ={
    getAllClothes,
    getClothesById,
    addClothes,
    deleteClothes,
    updateClothes,
    register
    
}
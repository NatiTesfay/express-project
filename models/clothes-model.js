const mongoose = require("mongoose")
const Schema = mongoose.Schema

const clothes = new Schema({
    id:Number,
    typeOfClothes:String,
    gender:Boolean ,
    company:String,
    companyModel:String,
    price:Number,
    total:Number,
    isShort:Boolean,
    isDryFit:Boolean,
    url:""
},)


const clothesModal = mongoose.model("clothes",clothes)
module.exports = clothesModal;

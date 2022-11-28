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


module.exports = mongoose.model("clothes",clothes);

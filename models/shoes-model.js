const mongoose = require("mongoose");
const Schema = mongoose.Schema


const shoes = new Schema({
    id:Number,
    typeOfShoes:String,
    company:String,
    companyModel:String, 
    price:Number,
    total:Number,
    isOnSale:Boolean,
    url:""
},
)


const shoesModal = mongoose.model("shoes",shoes)
module.exports = shoesModal;

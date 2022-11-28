const mongoose = require("mongoose");
const Schema = mongoose.Schema

const sportsEquipment = new Schema({
    id:Number,
    sportType:String,
    nameOfProduct:String,
    company:String,
    price:Number,
    total:Number,
    team_id:Number,
    url:""
},)

module.exports = mongoose.model("sportsEquipment",sportsEquipment)
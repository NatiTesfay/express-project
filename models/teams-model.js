const mongoose = require("mongoose")
const Schema = mongoose.Schema

const teams = new Schema({
   team:String,
   sportsClub:String,
   countryTeams:String,
   id:Number,
   teamName:String
},)

module.exports = mongoose.model("teams",teams)
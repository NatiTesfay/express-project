const mongoose = require("mongoose")
const Schema = mongoose.Schema

const teams = new Schema({
   team:String,
   sportsClub:String,
   countryTeams:String,
   id:Number,
   teamName:String
},)



const teamModel = mongoose.model("teams",teams)
module.exports = teamModel;

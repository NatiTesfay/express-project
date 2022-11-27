const mongoose = require("mongoose");
const DBConcoctionString = process.env.CONNECTIOM_STRING;

mongoose.connect(DBConcoctionString,
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("mongoDB Connected..."))
.catch(error=>{
    console.log("connection error",error);
});

const db =mongoose.connection;

module.exports = db;
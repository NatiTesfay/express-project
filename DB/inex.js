const mongoose = require("mongoose");

const DBConcoctionString = process.env.DBConcoctionString

mongoose.connect(DBConcoctionString, {
    useNewUrlParser: true,
    useUnifiedTopology:true

})
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.error("Connection error", err.message))

module.exports = mongoose.connection
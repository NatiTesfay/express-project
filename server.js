const dotenv = require("dotenv")
dotenv.config()
require("./DB/inex")
const express = require("express");
const cors = require("cors");
const clothesRouter = require("./models/clothes-model")
const shoesRouter = require("./models/shoes-model")
const sportsEquipmentRouter = require("./models/sportsEquipment-model")
const teamsRouter = require("./models/teams-model")
// const passport = require("passport")
// require("./confing/passport")(passport)
const app = express();
const port = 8080;








app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
// app.use(passport.initialize())
app.use("clothesRouter",clothesRouter)
app.use("shoesRouter",shoesRouter)
app.use("sportsEquipmentRouter",sportsEquipmentRouter)
app.use("teamsRouter",teamsRouter)
// app.use('/user',passport.authenticate("jwt",{session:false}),userRouter)
app.get("/",(req,res)=>{
    res.send("seccusse")
})
app.listen(port,()=>{
    console.log(`server is up ${port}`);
})
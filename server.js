const dotenv = require("dotenv")
dotenv.config()
require("./DB/inex")
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;


const clothesRouter = require("./routes/clothes-router")
const shoesRouter = require("./routes/shoes-router")
const sportsEquipmentRouter = require("./routes/sportsEquipment-router")
const teamsRouter = require("./routes/teams-router")




app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/clothesRouter",clothesRouter)
app.use("/shoesRouter",shoesRouter)
app.use("/sportsEquipmentRouter",sportsEquipmentRouter)
app.use("/teamsRouter",teamsRouter)
app.get("/",(req,res)=>{
    res.send("seccusse")
})
app.listen(port,()=>{
    console.log(`server is up ${port}`);
})
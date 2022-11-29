const dotenv = require("dotenv")
dotenv.config()
require("./DB/index")
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const path = require("path");


const clothesRouter = require("./routes/clothes-router")
const shoesRouter = require("./routes/shoes-router")
const sportsEquipmentRouter = require("./routes/sportsEquipment-router")
const teamsRouter = require("./routes/teams-router")

app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/clothes",clothesRouter);
app.use("/shoes",shoesRouter);
app.use("/sportsEquipment",sportsEquipmentRouter)
app.use("/teams",teamsRouter)

app.get("/",(req,res)=>{
    res.send("success")
})
app.listen(port,()=>{
    console.log(`server is up ${port}`);
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../client/build")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../client/build","index.html"));
    })
}
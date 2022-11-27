const dotenv = require("dotenv")
dotenv.config()
require("./DB")
const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("seccusse")
})


app.listen(port,()=>{
    console.log(`server is up ${port}`);
})
const clothesRouter = require("express").Router()
const{
    getAllClothes,
    addClothes
    
} = require("../controllers/clothes-ctrl")

clothesRouter.get("/",getAllClothes)
clothesRouter.post("/addClothes",addClothes)



module.exports = clothesRouter;
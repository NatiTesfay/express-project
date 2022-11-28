const clothesRouter = require("express").Router()
const{
    getAllClothes
    
} = require("../controllers/clothes-ctrl")

clothesRouter.get("/clothes",getAllClothes)



module.exports = clothesRouter;
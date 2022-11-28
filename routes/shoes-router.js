const clothesRouter = require("express").Router()
const{
    getAllShoes
    
} = require("../controllers/shoes-ctrl")

clothesRouter.get("/shoes",getAllShoes)



module.exports = clothesRouter;
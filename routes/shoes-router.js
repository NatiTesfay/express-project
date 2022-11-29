const shoesRouter = require("express").Router()
const{
    getAllShoes,
    addShoes,
} = require("../controllers/shoes-ctrl")

shoesRouter.get("/",getAllShoes)
shoesRouter.post("/addShoes",addShoes)



module.exports = shoesRouter;
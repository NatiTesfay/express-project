const routerAdidas = require("express").Router()
const{
    getShoes,
    getShoesById,
    postShoes,
    deleteShoes,
    addShoes
} = require("../controllers/adidas-ctrl")

routerAdidas.get("/",getShoes)
routerAdidas.get("/byId/:id",getShoesById)
routerAdidas.post("/saveData",postShoes)
routerAdidas.delete("/deleteData:id",deleteShoes)
routerAdidas.put("/upData/:id",addShoes)

module.exports = routerAdidas;
const sportsEquipmentRouter = require("express").Router()
const{
    getAllSportsTolls
    
} = require("../controllers/sportsEquipment-ctrl")

sportsEquipmentRouter.get("/sportsEquipment",getAllSportsTolls)



module.exports = sportsEquipmentRouter;
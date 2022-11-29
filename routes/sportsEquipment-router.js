const sportsEquipmentRouter = require("express").Router()
const{
    getAllSportsEquipment,
    addSportsEquipment,
  }
 = require("../controllers/sportsEquipment-ctrl")

sportsEquipmentRouter.get("/",getAllSportsEquipment)
sportsEquipmentRouter.post("/sportTools",addSportsEquipment)



module.exports = sportsEquipmentRouter;
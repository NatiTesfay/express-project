const teamsRouter = require("express").Router()
const{
    getAllTeam,
    addTeam,
  } = require("../controllers/teams-ctrl")

teamsRouter.get("/",getAllTeam)
teamsRouter.post("/addTeam",addTeam)



module.exports = teamsRouter;
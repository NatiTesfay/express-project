const teamsRouter = require("express").Router()
const{
    getAllTeams
    
} = require("../controllers/teams-ctrl")

teamsRouter.get("/teams",getAllTeams)



module.exports = teamsRouter;
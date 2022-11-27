const {shoes} = require("../models/user")

const getShoes = (req,res) =>{
    res.send("get")
}

const getShoesById = (req,res)=>{
    findIndex(req, res);
  }

const postShoes = (req,res) =>{
    findUserIndex(req,res)
}

const deleteShoes = (req, res) => {
        const startIndex = findUserIndex(req);
        const as = users.splice(startIndex, 1)
        as ? res.send(students) : res.send("error")
    }

    const addShoes = (req,res)=>{
           const userIndex = findUserIndex(req);
           if (userIndex > -1) {
            students[userIndex] = req.body.user;
            return res.send(students)
           }
           res.send("user not found");
        }

    function findUserIndex(req) {
        const userItem = students.find(user => user.id == req.params.id);
        const startIndex = students.indexOf(userItem);
        return startIndex;
    }


module.exports={
    getShoes,
    getShoesById,
    postShoes,
    deleteShoes,
    addShoes,
    findUserIndex
}
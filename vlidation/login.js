const validator = require("validator")
const isEmpty = require("is-empty");

module.exports = validateLogin = (user)=>{  
   let errors = {}
    user.email = ! isEmpty(user.email)? user.email: "";
    user.password = isEmpty(user.password)? "":user.password
   
    
   if (validator.isEmpty(user.lastName))errors.lastName = "last name required" 
   if ( validator.isEmpty(user.email))errors.email="email is required";
   if ( ! validator.isEmpty(user.email))errors.email="email is wrong";

   return{
    errors,
    isValid:isEmpty(errors)
    //isValid = true or false//
   }
}

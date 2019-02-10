const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data){

    let errors = {};

    data.name = !isEmpty(data.name) ? data.name:"";
    data.email = !isEmpty(data.email) ? data.email:"";
    data.password = !isEmpty(data.password) ? data.password:"";
    data.password2 = !isEmpty(data.password2) ? data.password2:"";

    //Validation Starts Here

    //Name Checks
    if(Validator.isEmpty(data.name)){
        errors.name = "Name field is required";
    }

    //Email Checks
    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email is not valid";
    }

    //Password Check
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required"
    }
    //Password Check
    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm password field is required"
    }

    //Password Check
    if(!Validator.isLength(data.password, {min:6, max:30})){
        error.password = "Password must be atleast 6 characters";
    }
    

    if(!Validator.equals(data.password, data.password2)){
        errors.password2="Password must match"
    }
    return{
        errors,
        isValid: isEmpty(errors)
    };

}

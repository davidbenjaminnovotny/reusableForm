import Errors from "./Error.json"

// Basic text field validation
const checkName = (val, currLang) => {
    let errors = []
    if (val.length <= 0) {
        errors.push(Errors["minLengthErr"][currLang])
    }

    const letters = /^[A-Za-z ]+$/;
    if (!letters.test(val)) {
        errors.push(Errors["wrongCharErr"][currLang])
    }
    return errors
}

// Basic Email validation
const email = (val, currLang) => {
    let errors = []
    if (val.length <= 0) {
        errors.push(Errors["minLengthErr"][currLang])
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(val)) {
        errors.push(Errors["emailUnformat"][currLang])
    }
    return errors
}


// Basic Password Validation
const password = (val, currLang) => {
    let errors = []
    let passwordStrength;

    var strongRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    var mediumRegex = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

    if (val.length <= 7) {
        errors.push(Errors["minLengthPassErr"][currLang])
    }
    if (val.length >= 31) {
        errors.push(Errors["maxLengthPassErr"][currLang])
    }

    if (strongRegex.test(val)) {
        passwordStrength = Errors["passStrength"]['strong'][currLang]
    }
    else if (mediumRegex.test(val)) {
        passwordStrength = Errors["passStrength"]['medium'][currLang]
    }
    else {
        passwordStrength = Errors["passStrength"]['weak'][currLang]
    }
    return {
        errors,
        passwordStrength
    }
}

// Basic Double Password Validation
const passwordVerify = (val,  currLang) => {
    let errors = []
    if (val.verPass !== val.orPass) {
        errors.push(Errors["passMatch"][currLang])
    }
    return errors
}

// Basic Message Validation
const message = (val,  currLang) => {
      let errors = []
      if (val.length < 1) {
        errors.push(Errors["messageLength"][currLang])
        
      }
      return errors
  }



export default {
    checkName,
    email,
    password,
    passwordVerify,
    message

}
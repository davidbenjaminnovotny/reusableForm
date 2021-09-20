import Errors from "./Error.json"

   const checkName = (val,currLang) => {
     let errors = []
     if(val.length <= 0){
         errors.push(Errors["minLengthErr"][currLang])
     }

     const letters = /^[A-Za-z ]+$/;
     if(!letters.test(val)){
        errors.push(Errors["wrongCharErr"][currLang])
    }
    return errors
}

const email = (val,currLang) => {
    let errors = []
    if(val.length <= 0){
        errors.push(Errors["minLengthErr"][currLang])
    }

   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(val)){
       errors.push(Errors["emailUnformat"][currLang])
   }
   return errors
}


export default  {
checkName,
email
 
}
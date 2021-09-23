<template>
  <div class="Form">
      <form>

          <!-- FIRST NAME -->
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input 
            name="first-name" 
            type="text" 
            v-model.trim="form.firstName.data" 
            :class='form.firstName.errors.length === 0 ? "corrInput" : "errInput"'/>
            
            <span v-show="form.firstName.errors">{{form.firstName.errors[0]}}</span>
           
          </div>

          <!-- LAST NAME -->
          <div class="form-group">
            <label for="last-name">Last Name*</label>
            <input 
            name="last-name" 
            type="text" 
            v-model.trim="form.lastName.data" 
            :class='form.lastName.errors.length === 0 ? "corrInput" : "errInput"'/>

             <span v-show="form.lastName.errors"> {{form.lastName.errors[0]}}</span>
          </div>

          <!-- EMAIL -->
          <div class="form-group">
            <label for="email">Email*</label>
            <input 
            name="email" 
            type="email" 
            v-model.trim="form.email.data" 
            :class='form.email.errors.length === 0 ? "corrInput" : "errInput"'/>

            <span v-show="form.email.errors">{{form.email.errors[0]}}</span>
          </div>

          <!-- GENDER -->
          <div class="form-group flex-row">
            Gender*
       
            <div class="sub-form-group">
              <input type="radio" id="Male" name="gender" value="Male" v-model="form.gender.data">
              <label for="Male">Male</label><br>
            </div>
            
            <div class="sub-form-group">
              <input type="radio" id="Female" name="gender" value="Female" v-model="form.gender.data">
              <label for="Female">Female</label><br>
            </div>

             <div class="sub-form-group">
              <input type="radio" id="Other" name="gender" value="Other" v-model="form.gender.data">
              <label for="Other">Other</label><br>
            </div>

              <div class="sub-form-group">
              <input type="radio" id="NotImportant" name="gender" value="Not Important" v-model="form.gender.data">
              <label for="NotImportant">Not Important</label><br>
            </div>

          </div>

          <!-- PASSWORD -->

            <div class="form-group">
            <label for="Password">Password*</label>
            <input 
            name="Password" 
            type="password" 
            v-model.trim="form.password.data" 
            :class='form.password.errors.length === 0 ? "corrInput" : "errInput"'/>
            <span
            :class='{
              strongBadge: form.password.strength === "Strong",
              mediumBadge: form.password.strength === "Medium",
              weakBadge: form.password.strength === "Weak",}'
            
            >{{form.password.strength}}</span>
            <span v-show='form.password.strength === "Weak"'>
              Try to use variations of numbers and characters to make your password more difficult to figure out.
            </span>
            <span v-show="form.password.errors">{{form.password.errors[0]}}</span>
          </div>

          <!-- VERIFY PASSWORD -->
           <div class="form-group">
            <label for="verify-password">Verify Password*</label>
            <input name="verify-password" type="password" 
            v-model.trim="form.verifyPassword.data" 
           />
           <span v-show="form.verifyPassword.errors">{{form.verifyPassword.errors[0]}}</span>
          </div>

          <!-- MESSAGE -->
           <div class="form-group">
           <label for="message">Message*</label>
           <textarea name="message"></textarea>
          </div>

           <!-- AGREEMENTS -->
           <div class="form-group">
           <label for="Agreement">Terms and conditions*</label>
           <input type="checkbox" name="agreement" v-model="form.agreement.data"/>
               <span v-show="form.agreement.errors">{{form.agreement.errors[0]}}</span>
          </div>

          <!-- SUBMIT FORM -->
          <div class="form-group">
            <button type="submit" @click="submitForm()" v-on:submit.prevent="onSubmit">
              Submit
            </button>
          </div>
        

      </form>
  </div>
</template>

<script>
import Validation from './validation'

export default {
  name: 'Form',
  props: {
  
  },
  created(){
    // Function that should pull current Lang of application.
    this.currLang = "eng"
  },
  data (){
    return{
      form:{
        firstName: {
          data:"",
          errors:[]
        },
        lastName: {
          data:"",
          errors:[]
        },
        gender: {
          data:"",
          errors:[]
        },
        email: {
          data:"",
          errors:[]
        },
        password: {
          data:"",
          errors:[],
          strength:""
        },
       verifyPassword: {
          data:"",
          errors:[]
        },
      agreement: {
          data:"",
          errors:[]
        },
      
      },
      errorMessages:{
        minLengthErr:"penishead"
      },
      currLang: ""
    }
  },
  watch:{
    "form.firstName.data":{
      deep: true,
      handler(val){
       const check =  Validation.checkName(val, this.currLang)
       check ?  this.form.firstName.errors = check :  this.form.firstName.errors = ""
      
     }
    },
      "form.lastName.data":{
      deep: true,
      handler(val){
       const check =  Validation.checkName(val, this.currLang)
       check ?  this.form.lastName.errors = check :  this.form.lastName.errors = ""
      
     }
    },
    "form.email.data":{
      deep: true,
      handler(val){
       const check =  Validation.email(val, this.currLang)
       check ?  this.form.email.errors = check :  this.form.email.errors = ""
      
     }
    },
     "form.password.data":{
      deep: true,
      handler(val){
       const check =  Validation.password(val, this.currLang)
       check ?  this.form.password.errors = check.errors :  this.form.password.errors = ""
       check.passwordStrength ? this.form.password.strength = check.passwordStrength : this.form.password.strength = "weak"
      
     }
    },
    "form.verifyPassword.data":{
      deep: true,
      handler(val){
     /*  const check =  Validation.passwordVerify(val, this.form.verifyPassword.data, this.currLang)
       check ?  this.form.verifyPassword.errors = check.errors :  this.form.verifyPassword.errors = ""
       */
       
      
     }
    },
      "form.agreement.data":{
      deep: true,
      handler(val){
        if(val.checked){
          alert("checked")
        }
      
     }
    },
     
  },
  methods:{
    runCall: function(){
      Validation.testCall()
    },
    submitForm: function(e){
      e.preventDefault();
      
    }
  }
}
</script>


<style scoped lang="scss">
.Form{
  width:300px;
}
.form-group{
  display:flex;
  flex-direction: column;
}
.sub-form-group{
    display:flex;
  flex-direction: column;
}
textarea{
  resize: none;
}

.flex-row{
  flex-direction: row;
}
.errInput{
  border:5px solid red;
}
.corrInput{
 
}

.strongBadge{
  color:green;
}
.mediumBadge{
  color:orange;
}
.weakBadge{
  color:red;
}

</style>

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

            <ul 
            v-show="form.firstName.errors" 
            v-for="err in form.firstName.errors" 
            :key="err">
                <li>{{err}}</li>
            </ul>
          </div>

          <!-- LAST NAME -->
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input 
            name="last-name" 
            type="text" 
            v-model.trim="form.lastName.data" 
            :class='form.lastName.errors.length === 0 ? "corrInput" : "errInput"'/>

            <ul 
            v-show="form.lastName.errors" 
            v-for="err in form.lastName.errors" 
            :key="err">
                <li>{{err}}</li>
            </ul>
          </div>

          <!-- EMAIL -->
          <div class="form-group">
            <label for="email">Email</label>
            <input 
            name="email" 
            type="email" 
            v-model.trim="form.email.data" 
            :class='form.email.errors.length === 0 ? "corrInput" : "errInput"'/>

            <ul 
            v-show="form.email.errors" 
            v-for="err in form.email.errors" 
            :key="err">
                <li>{{err}}</li>
            </ul>
          </div>

          <!-- GENDER -->
          <div class="form-group flex-row">
            
            <div class="sub-form-group">
              <input type="radio" id="Male" name="gender" value="Male" v-model="form.gender.data">
              <label for="Male">Male</label><br>
            </div>
            
            <div class="sub-form-group">
              <input type="radio" id="Female" name="gender" value="Female" v-model="form.gender.data">
              <label for="Female">Female</label><br>
            </div>

          </div>

          <!-- PASSWORD -->
           <div class="form-group">
            <label for="password">Password</label>
            <input name="password" type="password" v-model.trim="form.password.data"/>
          </div>

          <!-- VERIFY PASSWORD -->
           <div class="form-group">
            <label for="verify-password">Verify Password</label>
            <input name="verify-password" type="password" v-model.trim="form.verifyPassword.data"/>
          </div>

          <!-- MESSAGE -->
           <div class="form-group">
           <label for="message">Message</label>
           <textarea name="message"></textarea>
          </div>

           <!-- AGREEMENTS -->
           <div class="form-group">
           <label for="Agreement">Terms and conditions</label>
           <input type="checkbox" name="agreement" v-model="form.agreement.data"/>
          </div>

          <!-- SUBMIT FORM -->
          <div class="form-group">
            <button type="submit" @click="runCall()">
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
          errors:[]
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
     
  },
  methods:{
    runCall: function(){
      Validation.testCall()
    },
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

</style>

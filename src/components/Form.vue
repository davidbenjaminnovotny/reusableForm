<template>
  <div class="Form">
      <form @submit.prevent> 


          <!-- FIRST NAME -->
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input 
            placeholder="Max"
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
            placeholder="Muster"
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
            placeholder="Max.Muster@gmail.com"
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
             :class='form.verifyPassword.errors.length === 0 ? "corrInput" : "errInput"'
           />
           <span v-show="form.verifyPassword.errors">{{form.verifyPassword.errors[0]}}</span>
          </div>

          <!-- MESSAGE -->
           <div class="form-group">
           <label for="message">Message*</label>
           <textarea name="message"
           placeholder="Hello, Grüetzi, Bonjour..."
            v-model.trim="form.message.data" 
           ></textarea>
              <span v-show="form.message.errors">{{form.message.errors[0]}}</span>
          </div>

           <!-- AGREEMENTS -->
           <div class="form-group">
           <label for="Agreement">Terms and conditions*</label>
           <input type="checkbox" name="agreement" v-model="form.agreement.data"/>
               <span v-show="form.agreement.errors">{{form.agreement.errors[0]}}</span>
          </div>

          <!-- SUBMIT FORM -->
          <div class="form-group">
            <button :disabled="onSubmit.disabled" ref="submitButton" @click="submitForm()">
              Submit
            </button>
                <span>{{onSubmit.errors}}</span>
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
    // Function that should pull current Lang of application/site.
    this.currLang = "eng"
  },
  data (){
    return{
      form:{
        firstName: {
          data:"",
          errors:[],
          set:false
        },
        lastName: {
          data:"",
          errors:[],
          set:false
        },
        gender: {
          data:"",
          errors:[],
          set:false
        },
        email: {
          data:"",
          errors:[],
          set:false
        },
        password: {
          data:"",
          errors:[],
          strength:"",
          set:false
        },
       verifyPassword: {
          data:"",
          errors:[],
          set:false
        },
      message: {
          data:"",
          errors:[],
          set:false
        },
      agreement: {
          data:"",
          errors:[],
          set:false
        },
     
      },
         onSubmit:{
        errors:"",
        disabled:false
      },
    
      currLang: ""
    }
  },
  watch:{
    "form.firstName.data":{
      deep: true,
      handler(val){
       const check =  Validation.checkName(val, this.currLang)

       if(check.length){
         this.form.firstName.errors = check
         this.form.firstName.set = false
       }else{
          this.form.firstName.errors = "" 
           this.form.firstName.set = true
       }
       
      
     }
    },
      "form.lastName.data":{
      deep: true,
      handler(val){
       const check =  Validation.checkName(val, this.currLang)
     
        if(check.length){
         this.form.lastName.errors = check
         this.form.lastName.set = false
       }else{
          this.form.lastName.errors = "" 
           this.form.lastName.set = true
       }
      
     }
    },
    "form.email.data":{
      deep: true,
      handler(val){
       const check =  Validation.email(val, this.currLang)
      
       if(check.length){
         this.form.email.errors = check
         this.form.email.set = false
       }else{
          this.form.email.errors = "" 
           this.form.email.set = true
       }
      
     }
    },
     "form.gender.data":{
      deep: true,
      handler(){
       this.form.gender.set = true
      
     }
    },
     "form.password.data":{
      deep: true,
      handler(val){
       const check =  Validation.password(val, this.currLang)

        if(check.errors.length){
         this.form.password.errors = check.errors
         this.form.password.set = false
         console.log("wrong")
       }else{
          this.form.password.errors = "" 
           this.form.password.set = true
       }
      
       check.passwordStrength ? this.form.password.strength = check.passwordStrength : this.form.password.strength = "weak"
     }
    },
    "form.verifyPassword.data":{
      deep: true,
      handler(val){
       const check =  Validation.passwordVerify({verPass: val, orPass: this.form.password.data}, this.currLang)
       if(check.length){
         this.form.verifyPassword.errors = check
         this.form.verifyPassword.set = false
       }else{
          this.form.verifyPassword.errors = "" 
           this.form.verifyPassword.set = true
       }  
     }
    },
      "form.agreement.data":{
      deep: true,
      handler(val){
        
         if(val){
        
         this.form.agreement.set = true
       }else{
         
           this.form.agreement.set = false
       }  
     
     }
    },
      "form.message.data":{
      deep: true,
      handler(val){
        
      const check =  Validation.message(val, this.currLang)
       if(check.length){
         this.form.message.errors = check
         this.form.message.set = false
       }else{
          this.form.message.errors = "" 
           this.form.message.set = true
       }  
        
      
     }
    },
     
  },
  methods:{
    runCall: function(){
      Validation.testCall()
    },
    submitForm: async function(){
    let errors = 0
    for (const key in this.form) {
        console.log(this.form[key])
      
         if(this.form[key].set === false){
             errors++
             if(errors){
          this.onSubmit.errors = "All fields must be filled out correctly and all obligatory options must be selected."
             }
            
          }else{
             this.onSubmit.errors = ""
             this.onSubmit.disabled = true

             /* SIMPLIFIED EXAMPLE:
             To API endpoint where data can be validated for the second and final time
                
                const post = await Axios.post("/sendFrom", this.form)
                .then((e) => {
                    if(e.data.errors){
                        SET ERRORS IN FORM
                    }else{
                      this.onSubmit.disabled = false
                    }
                })
                .catch((e) => {
                  console.log(e)
                })

             */
              
             }
          }

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
.corrInput{}

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
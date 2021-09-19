<template>
  <div class="Form">
      <form>

          <div class="form-group">
            <label for="first-name">First Name</label>
            <input name="first-name" type="text" v-model="form.firstName"/>
          </div>

          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input name="last-name" type="text" v-model="form.lastName"/>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input name="email" type="email" v-model="form.lastName"/>
          </div>

           <div class="form-group">
            <label for="password">Password</label>
            <input name="password" type="password" v-model="form.password"/>
          </div>

           <div class="form-group">
            <label for="verify-password">Verify Password</label>
            <input name="verify-password" type="password" v-model="form.verifyPassword"/>
          </div>

          <div class="form-group flex-row">
            
            <div class="sub-form-group">
              <input type="radio" id="Male" name="gender" value="Male" v-model="form.gender">
              <label for="Male">Male</label><br>
            </div>
            
            <div class="sub-form-group">
              <input type="radio" id="Female" name="gender" value="Female" v-model="form.gender">
              <label for="Female">Female</label><br>
            </div>

          </div>

           <div class="form-group">
           <label for="message">Message</label>
           <textarea name="message"></textarea>
          </div>

          <div class="form-group">
            <button type="submit">
              Submit
            </button>
          </div>
        

      </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
  
  },
  data: () => {
    return{
      form:{
        firstName: "",
        lastName: "",
        email:"",
        password:"",
        verifyPassword:""
      
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
</style>

<template>
  <div class="register-content">
    <h1 class="register-header">Create your WoTify account</h1>
    <hr />
    <p class="register-info">Fields marked with * are mandatory</p>
    <p v-show="errorMessage !== ''" class="error-message">{{ errorMessage }}</p>
    <oForm
      :formFields="registerFormFields"
      buttonLabel="Register"
      :submitFunction="attemptRegister"
      addClass="register-form"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import oForm from "@/components/03_organisms/oForm.vue";

import { register } from "@/api";

@Component({
  components: {
    oForm
  }
})
export default class pRegister extends Vue {
  private errorMessage: string = "";
  
  private registerFormFields = [
    {
      type: "text",
      label: "Username *",
      desc: "Needs to be at least 5 characters.",
      placeholder: "Enter your username",
      variable: "username"
    },
    {
      type: "password",
      label: "Password *",
      placeholder: "Enter your password",
      variable: "password"
    },
    {
      type: "text",
      label: "Email *",
      desc: "Please provide a valid email.",
      placeholder: "Enter your e-mail address",
      variable: "email"
    },
    {
      type: "text",
      label: "First Name",
      placeholder: "Add your first name",
      variable: "firstName"
    },
    {
      type: "text",
      label: "Last Name",
      placeholder: "Add your last name",
      variable: "lastName"
    }
  ];

  async attemptRegister(formInputData: Object) {
    let response = await register(formInputData);
    if (response.status === 201) {
      return this.$router.push({
        name: "Login",
        query: {
          registered: "true"
        }
      });
    }
    this.errorMessage = response.data.message;
  }
}
</script>

<style scoped>
hr {
  width: 500px;
  height: 1px;
}

.register-header {
  font-weight: 200;
}

.register-info {
  font-size: 12px;
  margin: 0;
}

.register-content {
  display: grid;
  justify-items: center;
  padding: 6%;
}
</style>
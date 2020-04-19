<template>
  <FormTheme>
    <form @submit="handleSubmit" ref="form">
      <div>
        <label for="email-id">Email:</label>
        <input type="text" name="email" id="email-id" v-model="email" />
      </div>
      <div>
        <label for="password-id">Senha:</label>
        <input
          type="password"
          name="password"
          id="password-id"
          v-model="password"
        />
      </div>
      <div class="submit-container">
        <Button type="submit" class="submit-button">Criar conta</Button>
        <router-link to="/nav">Voltar</router-link>
      </div>
    </form>
  </FormTheme>
</template>

<script>
import { mapActions } from "vuex";
import Button from "@/components/Button";
import FormTheme from "@/components/forms/FormTheme";

export default {
  components: {
    Button,
    FormTheme
  },
  data: function() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    ...mapActions(["signUp", "logIn", "setProfile"]),
    async handleSubmit(event) {
      event.preventDefault();
      const data = {
        email: this.email,
        password: this.password
      };

      try {
        await this.signUp(data);
        this.$emit("onSignUp");
      } catch (error) {
        console.warn(error);
      }
    }
  }
};
</script>

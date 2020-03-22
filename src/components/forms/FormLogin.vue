<template>
  <form @submit="handleSubmit" ref="form">
    <div>
      <label for="username-id">Usuário:</label>
      <input type="text" name="username" id="username-id" v-model="username" />
    </div>
    <div>
      <label for="password-id">Senha:</label>
      <input type="text" name="password" id="password-id" v-model="password" />
    </div>
    <div>
      <button type="submit">Logar</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    ...mapActions(["logIn"]),
    async handleSubmit(event) {
      event.preventDefault();
      const data = {
        username: this.username,
        password: this.password
      };

      try {
        await this.logIn(data);
        this.$emit("onLogin");
      } catch (error) {
        console.warn(error);
      }
    }
  }
};
</script>

<style lang="css" scoped>
form {
  max-width: 180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
}

input {
  margin-bottom: 20px;
}
</style>
<template>
  <form @submit="handleSubmit" ref="form">
    <div v-if="userIsLogged">
      <h2 v-if="currentUser">Username: {{currentUser.username}}</h2>
      <hr />
    </div>
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
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data: function() {
    return {
      username: null,
      password: null
    };
  },
  computed: {
    ...mapState({
      currentUser: state => state.profile.currentUser
    }),
    ...mapGetters(["userIsLogged"])
  },
  async mounted() {
    if (this.userIsLogged) {
      setTimeout(() => {
        this.logOut();
      }, 1500);
    }
  },
  methods: {
    ...mapActions(["logIn", "logOut", "getProfile"]),
    async handleSubmit(event) {
      event.preventDefault();

      const data = {
        username: this.username,
        password: this.password
      };

      try {
        await this.logIn(data);
        await this.getProfile();
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
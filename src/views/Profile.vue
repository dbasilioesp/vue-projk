<template>
  <div class="profile">
    <div v-if="userIsLogged">
      <h2 v-if="currentUser">Username: {{currentUser.username}}</h2>
      <hr />
      <button @click="logoutAccount">Sair</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      accessToken: state => state.auth.accessToken,
      currentUser: state => state.profile.currentUser
    }),
    ...mapGetters(["userIsLogged"])
  },
  async created() {
    try {
      await this.getProfile(this.accessToken);
    } catch (error) {
      this.logoutAccount();
    }
  },
  methods: {
    ...mapActions(["logOut", "getProfile"]),
    async logoutAccount() {
      await this.logOut();
      this.$router.push("/");
    }
  }
};
</script>
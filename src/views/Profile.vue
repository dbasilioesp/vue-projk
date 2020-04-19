<template>
  <div class="profile">
    <header>
      <div>
        <Title size="-">Mestrando</Title>
      </div>
      <div class="profile-nav">
        <span>{{ currentUser.email }}</span>
        <button class="exit-button" @click="logoutAccount">Sair</button>
      </div>
    </header>
    <main>
      <div class="main-inner">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Title from "@/components/Title";

export default {
  components: {
    Title
  },
  computed: {
    ...mapState({
      accessToken: state => state.auth.accessToken,
      currentUser: state => state.auth.currentUser
    }),
    ...mapGetters(["userIsLogged"])
  },
  async created() {
    if (!this.currentUser) {
      await this.logoutAccount();
    }
  },
  methods: {
    ...mapActions(["logOut"]),
    async logoutAccount() {
      await this.logOut();
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.profile {
}

.profile-nav {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: column;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-size);
  width: 100%;
  padding: 0 2vw;
  background: var(--sky-color);
  border-bottom: 2px solid var(--sky-color);
}

main {
  min-height: calc(100vh - var(--header-size));
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
  grid-template-rows: 8vh auto 1fr;
  grid-template-areas: ". . ." ". box ." ". . .";

  .main-inner {
    grid-area: box;
  }
}

.exit-button {
  border: 0;
  background: none;
  cursor: pointer;
  font-size: 1rem;
}
</style>

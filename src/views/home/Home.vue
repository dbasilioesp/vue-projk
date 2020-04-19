<template>
  <div class="home">
    <div class="center-box">
      <Title class="title">Mestrando</Title>
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title";

export default {
  name: "Home",
  components: {
    Title
  },
  methods: {
    goToSignIn() {
      this.$router.push("/signin");
    },
    goToSignUp() {
      this.$router.push("/signup");
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  height: 100vh;
  background: var(--moon-color);
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 0.5fr auto 1fr;
  grid-template-areas:
    ". . ."
    ". centerBox ."
    ". . .";
}
.center-box {
  grid-area: centerBox;
  padding: 20px 45px 30px;
  border-radius: 6px;
  background: var(--paper-color);
  box-shadow: 1px 1px 4px rgba(black, 0.3);
}
.title {
  margin-top: 0;
  position: relative;

  &::after {
    content: "";
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 1px;
    background: var(--moon-color);
    box-shadow: 1px 1px 3px rgba(black, 0.3);
  }
}
</style>

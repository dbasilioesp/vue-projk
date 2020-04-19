<template>
  <div class="buttons">
    <Button class="button-login" @click="goToSignIn">Logar</Button>
    <Button class="button-signin" @click="goToSignUp">Criar conta</Button>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "HomeNavigation",
  components: {
    Button
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
.buttons {
  width: 200px;
  * {
    width: 100%;
    margin-bottom: 15px;
  }
}
.button-login {
}
.button-signin {
}
</style>

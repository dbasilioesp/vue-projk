<template>
  <div class="home">
    <FormLogin @onLogin="$router.push('/profile')" />
  </div>
</template>

<script>
// @ is an alias to /src
import FormLogin from "@/components/forms/FormLogin.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    FormLogin
  },
  computed: {
    ...mapGetters(["userIsLogged"])
  },
  created() {
    if (this.userIsLogged) {
      // this.$router.replace("/profile");
    }
  }
};
</script>

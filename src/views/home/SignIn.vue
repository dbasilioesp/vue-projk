<template>
  <div>
    <FormSignIn @onLogin="onLogin" />
  </div>
</template>

<script>
import FormSignIn from "@/components/forms/FormSignIn";

export default {
  components: {
    FormSignIn
  },
  methods: {
    onLogin() {
      this.$router.push("/profile");
    }
  }
};
</script>

<template>
  <div>
    <FormSignUp @onSignUp="onSignUp" />
  </div>
</template>

<script>
import FormSignUp from "@/components/forms/FormSignUp";

export default {
  components: {
    FormSignUp
  },
  methods: {
    onSignUp() {
      console.log("Sign up concluded.");
      this.$router.push("/profile");
    }
  }
};
</script>

<template>
  <div class="home">
    <FormLogin />
  </div>
</template>

<script>
// @ is an alias to /src
import FormLogin from '@/components/forms/FormLogin.vue'

export default {
  name: 'Home',
  components: {
    FormLogin
  }
}
</script>

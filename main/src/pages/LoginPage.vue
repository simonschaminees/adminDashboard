<template>
  <b-container class="bv-example-row">
    <b-row>
      <img src="../assets/images/background/arendsnest.jpg" alt="Arendsnest">
    </b-row>
    <b-row id="simon" class="mb-3" align-v="center">
        <LoginForm />
    </b-row>
  </b-container>
</template>

<script>

import LoginForm from '../components/forms/LoginForm.vue'

export default {
  name: 'LoginPage',
    components: {
      LoginForm
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
  @import "../styles/main.scss";
  #simon {

    color: $primary;
  }
</style>

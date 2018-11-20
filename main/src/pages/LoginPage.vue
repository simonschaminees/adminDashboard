<template>
  <b-container class="h-50npm">
    <!-- <b-row>
      <img src="../assets/images/background/arendsnest.jpg" alt="Arendsnest">
    </b-row> -->
    <b-row class="mb-3" align-v="center">
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

<style>
</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/images/background/arendsnest.jpg">
    <LoginPage msg="Welcome to Your Vue.js App"/>
    <hr>
    <router-link to="/Adminpage">Home</router-link>
       <router-link to="/Logout">Logout</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue'

export default {
  name: 'app',
  components: {
      LoginPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

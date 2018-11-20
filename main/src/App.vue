<template>
  <div id="app">

    <LoginPage msg="Welcome to Your Vue.js App"/>
    <hr>
    <router-link to="/Adminpage">Home</router-link>
       <router-link to="/Logout">Logout</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import LoginPage from './pages/LoginPage.vue'

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

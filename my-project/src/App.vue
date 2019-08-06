<template>
  <div id="app">
    <!-- <login/> -->
    <router-view></router-view>
  </div>
</template>

<script>

import Vue from 'vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi)

import login from './components/login.vue'
import home from './components/home.vue'

export default {
  name: 'app',
  components: {
    login,
    home
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

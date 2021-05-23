<template>
  <div id="app">
    <topbar></topbar>

    <main>
<!--      <img src="../static/img/icons/geomaplogo.png" alt="Vue.js PWA">-->
      <router-view></router-view>
    </main>

<!--    <foot></foot>-->
  </div>
</template>

<script>
  import Topbar from '@/components/Topbar'
  import Foot from '@/components/Foot'
  import NavigationDrawer from '@/components/NavigationDrawer'

  export default {
    name: 'app',

    components: {
      'topbar': Topbar,
      'foot': Foot,
      'navigation-drawer': NavigationDrawer
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }

</style>

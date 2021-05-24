<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">{{projectName}}</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
<!--      <template #default="{ expanded }">-->
<!--        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>-->
<!--        <b-icon v-else icon="chevron-bar-down"></b-icon>-->
<!--      </template>-->
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#/maps">Maps</b-nav-item>
        <b-nav-item href="#/about">About me</b-nav-item>
<!--        <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Navbar',

    data() {
      return {
        projectName: 'Geo-Map',
      }
    },

  }
</script>

<style>
  .navbar {
    display: flex;
    }
</style>


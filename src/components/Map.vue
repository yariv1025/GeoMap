<template>
  <div class="hero">
    <div>
      <h1 class="display-3">{{ msg }}</h1>
      <p class="lead">This is the page of our Geographic Information
        Systems(GIS) app</p>
      <p class="lead">A geographic information system (GIS) is a
        computer-based system used for collecting, storing, manipulating,</p>
      <p>and analyzing spatial data i.e data that can be referenced to a
        particular location on earth.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'map',
    data () {
      return {
        msg: 'Welcome to GeoMap'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }

</style>

<template>
  <div id="app">

    <v-responsive class="overflow-y-auto"
                  max-height="400">

      <v-responsive min-height="50vh"
                    transition="fade-transition">
        <img src="/static/img/icons/YG.jpg"
             width="300"
             height="300">
      </v-responsive>

      <div class="pa-6 text-center">
        <h2>Hey there <img
          src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
          width=50px>
          I'm Yariv</h2>
      </div>

      <v-responsive height="150vh"
                    class="text-center pa-2">

        <v-lazy v-model="isActive"
                :options="{threshold: .5}"
                min-height="200"
                transition="fade-transition">

          <v-card class="mx-auto"
                  max-width="336">

            <v-card-text>

              <h5>📚 A Bachelors Degree in Software Engineer, based in
                Azrikam(Ashdod), Israel.</h5>

              <div>
                <p> 🌱‍ This project was created duo the goal of exploring and
                  deepening the world of geo-mapping.</p>

                <p>While writing the project I was exposed to a new world of
                  geographic systems (GIS), got to know and learn about the
                  existing
                  geographic information systems on the web (WebGIS) and got
                  to
                  know
                  new and interesting development environments such as Vue,
                  Vuetify,
                  Bootstrap and more.</p>

                <p>
                  <br>
                  I used different libraries and services between them the
                  Leaflet library,
                  which allows to embed the map on the website and add various
                  components to it, such as an editing menu (by Geoman), zoom,
                  measuring and more.
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-lazy>

        <v-responsive height="20vh"
                      class="text-center pa-2">
          <v-lazy v-model="isActive"
                  :options="{threshold: .5}"
                  min-height="20"
                  transition="fade-transition">
            <div class="row">
              <div class="column order-0">
                <img src="/static/img/icons/leaflet.jpg"
                     width="200"
                     height="50">
              </div>

              <div class="column order-1">
                <img src="/static/img/icons/geoman.jpg"
                     width="200"
                     height="50">
              </div>

              <div class="column order-2">
                <img src="/static/img/icons/OSM.jpg"
                     width="200"
                     height="50">
              </div>

              <div class="column order-3">
                <img src="/static/img/icons/googlemaps.jpg"
                     width="200"
                     height="100">
              </div>

              <div class="column order-4">
                <img src="/static/img/icons/mapbox.jpg"
                     width="250"
                     height="100">
              </div>

              <div class="column order-5">
                <img src="/static/img/icons/arcgis.jpg"
                     width="200"
                     height="100">
              </div>

            </div>
          </v-lazy>
        </v-responsive>
      </v-responsive>
    </v-responsive>
  </div>
</template>

<script>
  export default {
    name: 'aboutUs',

    data: () => ({
      isActive: false,
    }),

    // data() {
    //   return {}
    // },

  }
</script>

<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  .column {
    float: left;
    width: 33.3%;
    margin-bottom: 16px;
    padding: 0 8px;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 8px;
  }

  .about-section {
    padding: 50px;
    text-align: center;
    background-color: #474e5d;
    color: white;
  }

  .container {
    padding: 0 16px;
  }

  .container::after, .row::after {
    content: "";
    clear: both;
    display: table;
  }

  .title {
    color: grey;
  }

  .button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
  }

  .button:hover {
    background-color: #555;
  }

  @media screen and (max-width: 650px) {
    .column {
      width: 100%;
      display: block;
    }
  }
</style>

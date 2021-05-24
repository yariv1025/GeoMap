<template>
  <div class="bg-">

    <!--Example: https://www.dominiquedesimpel.be/-->

    <!-- The App Section -->
    <div class="p-3 mb-2 bg-white text-black">
      <div class="row">

        <div class="column-66">
          <h1 class="xlarge-font"><b>What is Geo-Mapping?</b></h1>
          <p><span style="font-size:36px">Geo-mapping is the process of taking location-based data
            (names, addresses, sales numbers, demographic info, etc.) and
            using it to create a map.</span>
          </p>
        </div>

        <div class="column-33">
          <img src="/static/img/icons/explorer5.jpg"
               class="img-thumbnail"
               width="720"
               height="480">
        </div>

      </div>
    </div>


    <!-- Clarity Section -->
    <div class="container-expand-lg">
      <div class="row"
           :style="{'background-image':'url(https://wallpapercave.com/wp/wp2742532.jpg'}">

        <div class="column-33">
          <img src="/static/img/icons/explorer3.jpg"
               class="img-thumbnail"
               width="400"
               height="560">
        </div>

        <div class="column-66">
          <h1 class="xlarge-font" style="color:white"><b>{{AppName}}</b>
          </h1>
          <span style="font-size:36px; color:white">Gao-map app is an
            Interactive Web
            Mapping system that's written in JavaScript & Vue. <br> A Web
            mapping or an online mapping is the process of using the maps
            delivered by
            geographic information systems (GIS) on the Internet.
            </span>
          <span class="border-bottom-0"></span>
        </div>
      </div>
    </div>

    <!-- The App Section -->
    <div class="p-3 mb-2 bg-white text-black">
      <div class="row">

        <div class="column-66">
          <h1 class="xlarge-font"><b>The App</b></h1>
          <h1 class="large-font" style="color:MediumSeaGreen;"><b>How it's
            made?</b></h1>
          <span style="font-size:36px">I chose to work
            with Leaflet, an open source library written in JavaScript and
            designed to display maps on websites.
            The library is supported in various environments including mobile
            and HTML & CSS support systems.
            A variety of maps can be found in this project, including Google Maps
            and OpenStreetMap (OSM).
            </span>

          <button class="button"
                  onclick="location.href = 'http://localhost:8080/#/maps';">Take
            a look
          </button>
        </div>


        <div class="column-33">
          <img src="/static/img/icons/explorer2.jpg"
               class="img-thumbnail"
               width="400"
               height="560">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutProject',
    data() {
      return {
        AppName: 'Geo-Map',
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  .container {
    padding: 64px;
  }

  /* Clear floats */
  .row:after {
    content: "";
    display: table;
    clear: both
  }

  /* 2/3 column */
  .column-66 {
    float: left;
    width: 66.66666%;
    padding: 20px;
  }

  /* 1/3 column */
  .column-33 {
    float: left;
    width: 33.33333%;
    padding: 20px;
  }

  /* Add responsiveness - make the columns appear on top of each other instead of next to each other on small screens */
  @media screen and (max-width: 1000px) {
    .column-66,
    .column-33 {
      width: 100%;
      text-align: center;
    }

  }
</style>

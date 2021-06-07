<template>
  <div class="hero">
    <div class="row">

      <div class="col-sm">
        <!--        <JSONDialog :show="true"/>-->
<!--        <div id="marker">-->
<!--          <label for="lng-lnt"></label>-->
<!--          <input type="text"-->
<!--                 name="lng-lnt"-->
<!--                 id="lng-lnt"-->
<!--                 ref="marker"-->
<!--                 placeholder="[[Latitude,Longitude]]" required>-->

<!--          <div class="my-cta-button"-->
<!--               type="submit"-->
<!--               value="Send"-->
<!--               v-on:click="addMarker()">-->
<!--            Upload markers-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>

    <div id="mapid" class="col-sm">
      <v-container class="d-flex justify-center mb-6" flat tile>
        <div class="d-flex justify-center mb-6"
             style="height: 600px; width: 4000px;">
        </div>
      </v-container>
    </div>

  </div>
</template>

<script>
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  import '@geoman-io/leaflet-geoman-free'
  import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'
  import 'leaflet-measure'
  import {GeoSearchControl, OpenStreetMapProvider} from 'leaflet-geosearch'
  import {LMarker} from "vue2-leaflet"
  // import JSONDialog from "./JSONDialog"

  export default {
    name: 'maps',

    data() {
      return {
        markerLatLng:[]
      }
    },

    components: {
      'l-marker': LMarker,
      // 'JSONDialog': JSONDialog
    },

    props: [],

    mounted() {
      this.initMap()
    },

    methods: {

      // maps initialize
      initMap() {
        let mymap = L.map('mapid').setView([31.807055, 34.661830], 7)

        this.loadMaps(mymap)
        this.initIcons()
        this.loadToolbar(mymap)
        this.distanceMeasurement(mymap)
        this.setScale(mymap)
        this.leafletSearch(mymap)
        this.findCurrentLatLng(mymap)
      },

      // load maps
      loadMaps(mymap) {
        // definition of all the maps
        let streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          id: 'mapid',
          tileSize: 512,
          maxZoom: 18,
          zoomOffset: -1,
          visible: true,
          layers: [topographic, overlayMaps],
          accessToken: 'pk.eyJ1IjoieWFyaXYxMDUyIiwiYSI6ImNra2JlYTdpZjBkbWUyb294anliMThpYXkifQ.Zqpnr8jXo1J_Q8FPaCEIbA',
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mymap)
        let topographic = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            id: 'mapid',
            tileSize: 512,
            maxZoom: 18,
            zoomOffset: -1,
            visible: false,
            attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
          }),
          googleSatellite = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            id: 'mapid',
            tileSize: 512,
            maxZoom: 18,
            zoomOffset: -1,
            visible: false,
            attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a>, | Map style: &copy; <a href="https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters">GoogleMap</a>,| Map style: &copy; <a href="https://www.google.com/maps">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
          }),
          googleroad = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            id: 'mapid',
            tileSize: 512,
            maxZoom: 18,
            zoomOffset: -1,
            visible: false,
            attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a>, | Map style: &copy; <a href="https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters">GoogleMap</a>,| Map style: &copy; <a href="https://www.google.com/maps">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
          }),
          googleHybrid = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
            id: 'mapid',
            tileSize: 512,
            maxZoom: 18,
            zoomOffset: -1,
            visible: false,
            attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a>, | Map style: &copy; <a href="https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters">GoogleMap</a>,| Map style: &copy; <a href="https://www.google.com/maps">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
          }),
          Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
            visible: false,
          }),
          WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
            visible: false,
          }),
          WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
            maxZoom: 16,
            visible: false,
          })

        // create maps dictionary
        let baseMaps = {
          "streets": streets,
          "topographic": topographic,
          "google Satellite": googleSatellite,
          "google road": googleroad,
          "google Hybrid": googleHybrid,
          "Stadia Alidade SmoothDark": Stadia_AlidadeSmoothDark,
          "World Imagery": WorldImagery,
          "World Gray Canvas": WorldGrayCanvas,
        }

        // definition of all the checkbox feature
        let railway = L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          }).bindPopup('This is railway layer'),
          OpenAIP = L.tileLayer('http://{s}.tile.maps.openaip.net/geowebcache/service/tms/1.0.0/openaip_basemap@EPSG%3A900913@png/{z}/{x}/{y}.{ext}', {
            attribution: '<a href="https://www.openaip.net/">openAIP Data</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-NC-SA</a>)',
            ext: 'png',
            minZoom: 4,
            maxZoom: 14,
            tms: true,
            detectRetina: true,
            subdomains: '12'
          }).bindPopup('This is Open AIP layer')

        // create feature group
        let railwayAndOpenAIP = L.layerGroup([railway, OpenAIP])

        // create feature dictionary
        let overlayMaps = {
          "railway and Open AIP": railwayAndOpenAIP
        }

        // load maps & feature
        L.control.layers(baseMaps, overlayMaps).addTo(mymap)
      },

      // icons initialize
      initIcons() {
        delete L.Icon.Default.prototype._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
          iconUrl: require('leaflet/dist/images/marker-icon.png'),
          shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        })
      },

      // add leaflet-geoman controls with some options to the map
      loadToolbar(mymap) {
        mymap.pm.addControls({
          position: 'topleft',
          drawCircle: true,
          pinningOption: true,
          snappingOption: true,
        })
      },

      // distance measurement
      distanceMeasurement(mymap) {

        let measureControl = L.control.measure({
          position: 'bottomleft',
          activeColor: '#ba071f',
          completedColor: '#ba071f',
          primaryLengthUnit: 'kilometers',
          secondaryLengthUnit: 'meters',
          primaryAreaUnit: 'sqmeters',
          secondaryAreaUnit: 'acres',
          closeButton: false
        })

        measureControl.addTo(mymap)
      },

      // set scale
      setScale(mymap) {
        L.control.scale({position: 'bottomright'}).addTo(mymap)
      },

      findCurrentLatLng(mymap) {
        navigator.geolocation.getCurrentPosition(function (location) {
          let latlng = new L.LatLng(location.coords.latitude,
            location.coords.longitude)
          let marker =
            L.marker(latlng).addTo(mymap).bindPopup('Your current location')
        })
      },

      //TODO: fix the search function style
      //Search Plugin for Leaflet Map
      //source: https://www.npmjs.com/package/leaflet-geosearch
      leafletSearch(mymap) {

        const provider = new OpenStreetMapProvider()
        const searchControl = new GeoSearchControl({
          provider: provider,
          // style: 'bar',
          autoComplete: true,
          autoCompleteDelay: 250, // A little delay is required to not DDOS the server on every keystroke.
          showMarker: true, // optional: true|false  - default true
          showPopup: false, // optional: true|false  - default false
          marker: {
            // optional: L.Marker    - default L.Icon.Default
            icon: new L.Icon.Default(),
            draggable: false,
          },
          popupFormat: ({query, result}) => result.label, // optional: function    - default returns result label,
          resultFormat: ({result}) => result.label, // optional: function    - default returns result label
          maxMarkers: 1, // optional: number      - default 1
          retainZoomLevel: false, // optional: true|false  - default false
          animateZoom: true, // optional: true|false  - default true
          autoClose: false, // optional: true|false  - default false
          searchLabel: 'Enter address', // optional: string      - default 'Enter address'
          keepResult: false, // optional: true|false  - default false
          updateMap: true, // optional: true|false  - default true
        })

        mymap.addControl(searchControl)
      },


      // adds specific marker to our map
      addMarker(mymap) {
        let markers = this.$refs.marker.value
        if (!markers) {
          console.log(`Coordinates were not found!`)
        } else {
          markers = JSON.parse(markers)
          console.log(markers)

          markers.forEach((marker, index) => {
            // L.marker(marker).addTo(mymap)
            L.marker(marker).addTo(mymap)
            console.log(`A new marker added: ${marker}`)
          })
        }
      }
    }
  }

</script>

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

  body {
    padding: 0;
    margin: 0;
  }

  .my-cta-button, #custom-button {
    background: #000000;
    background: linear-gradient(#000000, #565758);
    border-radius: 1000px;
    padding: 10px 35px;
    color: #ffffff;
    display: inline-block;
    font: normal bold 20px/1 "Calibri", sans-serif;
    text-align: center;
  }

  #mapid {
    position: absolute;
    top: 55px;
    bottom: 0;
    width: 100%;
    height: 92%;
  }

</style>

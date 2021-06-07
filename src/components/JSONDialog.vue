<template>
  <div class="text-center" v-show="show">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <div id="marker">
          <label for="lng-lnt"></label>
          <input type="text"
                 name="lng-lnt"
                 id="lng-lnt"
                 ref="marker"
                 placeholder="[[Latitude,Longitude]]" required>

          <div class="my-cta-button"
               type="submit"
               value="Send"
               v-on:click="$refs.Map.addMarker()">
            Upload markers
          </div>
        </div>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {Map} from "./Map"

  export default {
    data() {
      return {
        dialog: false,
      }
    },
    props: ['show']
  }
</script>

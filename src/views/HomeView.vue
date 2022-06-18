<template>
  <div class="d-flex justify-space-around festehoehe">
    <v-hover>
      <template #default="{ hover }">
        <v-card
          class="mx-auto transition-swing"
          :class="`elevation-${hover ? 24 : 6}`"
        >
          <v-img
            max-width="300"
            src="/pictures/world.gif"
            class="rounded-circle ma-3"
          >
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </template>
    </v-hover>
    <v-hover>
      <template #default="{ hover }">
        <v-card
          class="mx-auto transition-swing ma-3"
          :class="`elevation-${hover ? 24 : 6}`"
        >
          <v-card-title
            >Hey <strong class="haupttitelbig"> !</strong></v-card-title
          >
          <v-card-text class="text-center">
            <p>
              It's me
              <strong class="haupttitel">Schmoaaaaah</strong> maybe you also
              know me as <strong class="haupttitel">Noah</strong>.
            </p>
            <p>
              So you found my website. Nice👌<span id="intelectuelspin">👌</span
              >.
            </p>
            <p>
              Please take a look at everything there is some
              <strong class="haupttitel">Cool</strong>
              <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
                <v-icon>mdi-sunglasses</v-icon>
              </v-btn>
              Stuff around
            </p>
          </v-card-text>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style scoped>
#haupttitel {
  font-family: "IKEA-SOFA-SANS";
  font-size: 18px;
}

#haupttitelnav {
  font-family: "IKEA-SOFA-SANS";
  font-size: 24px;
}

span#intelectuelspin {
  display: inline-block;
  cursor: pointer;
  transition: all 1s;
  -o-transition: all 1s;
  -moz-transition: all 1s;
  -webkit-transition: all 1s;
}

span#intelectuelspin:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
}

span#darkmode {
  cursor: pointer;
}

#festehoehe {
  height: 100%;
}
</style>

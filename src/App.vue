<template>
  <v-app>
    <v-theme-provider root>
      <v-container fluid class="pt-0">
        <v-row class="">
          <HeadNav />
          <v-main app class="h-100 pa-10">
            <v-fade-transition mode="out-in">
              <v-container fluid class="pt-0">
                <v-row class="">
                  <HeadNav />
                  <v-router-view />
                </v-row>
                <Footer />
              </v-container>
            </v-fade-transition>
          </v-main>
        </v-row>
        <Footer />
      </v-container>
    </v-theme-provider>
  </v-app>
</template>

<script lang="ts">
import Footer from "@/components/FooterComponent.vue";
import HeadNav from "@/components/HeadNavComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Footer,
    HeadNav,
  },
  data() {
    return {
      //
    };
  },
});
</script>

<style>
@font-face {
  font-family: "IKEA";
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IKEA"),
    url(./fonts/IKEA-SOFA-SANS/IKEA-SOFA-SANS.ttf.woff) format("truetype");
}
</style>

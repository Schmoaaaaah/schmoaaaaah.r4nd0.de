<template>
  <v-expansion-panels class="mb-6">
    <v-expansion-panel>
      <v-expansion-panel-header disable-icon-rotate>
        <template #default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              <span><strong>Insta</strong> Main</span>
            </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open" key="0"> Me without me </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
        <template #actions>
          <v-icon color="teal"> mdi-instagram </v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <InstaMain />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template #default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              <span><strong>Insta</strong> Meme</span>
            </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open" key="0">
                  Meme's that make you turn around
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
        <template #actions>
          <v-icon color="teal"> mdi-instagram </v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <Construction />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header disable-icon-rotate>
        <template #default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              <strong>Twitter</strong>
            </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open" key="0"> Twitter is dead isn't it 🙃</span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
        <template #actions>
          <v-icon color="teal"> mdi-twitter </v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <Construction />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  async fetch({ app, store }) {
    if (process.browser) return
    try {
      // Binds it on server side then unbind again to avoid memory leaks on the server.
      await store.dispatch('binduserschmoaaaaah')
      await store.dispatch('binduserschmeeeeeme')
      await store.dispatch('bindpostsschmoaaaaah')
      await store.dispatch('bindpostsschmeeeeeme')
      await store.dispatch('unbinduserschmoaaaaah')
      await store.dispatch('unbinduserschmeeeeeme')
      await store.dispatch('unbindpostsschmoaaaaah')
      await store.dispatch('unbindpostsschmeeeeeme')
    } catch (e) {}
  },
  /**  Bind Vuexfire on client-side: */
  async mounted() {
    try {
      await this.$store.dispatch('binduserschmoaaaaah')
      await this.$store.dispatch('binduserschmeeeeeme')
      await this.$store.dispatch('bindpostsschmoaaaaah')
      await this.$store.dispatch('bindpostsschmeeeeeme')
    } catch (e) {}
  },
}
</script>

<style scoped></style>

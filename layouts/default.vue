<template>
  <v-app>
    <v-theme-provider root>
      <v-container fluid class="pt-0">
        <v-row class="">
          <HeadNav />
          <v-main app class="h-100 pa-10">
            <v-fade-transition mode="out-in">
              <Nuxt />
            </v-fade-transition>
          </v-main>
        </v-row>
        <Footer />
      </v-container>
    </v-theme-provider>
  </v-app>
</template>

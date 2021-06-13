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
<script>
var _mtm = window._mtm = window._mtm || [];
_mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.type='text/javascript'; g.async=true; g.src='https://analytic.r4nd0.com/js/container_z0bPWdur.js'; s.parentNode.insertBefore(g,s);
</script>

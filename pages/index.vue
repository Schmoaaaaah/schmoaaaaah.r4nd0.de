<template>
  <v-container fluid class="pt-0">
    <v-row class="">
      <HeadNav />
      <v-col class="mr-auto pa-0">
        <v-main app class="h-100 pa-10">
          <div class="d-flex justify-space-around">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  class="mx-auto transition-swing"
                  :class="`elevation-${hover ? 24 : 6}`"
                >
                  <v-img
                    max-width="300"
                    src="/pictures/world.gif"
                    class="rounded-circle ma-3"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
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
              <template v-slot:default="{ hover }">
                <v-card
                  class="mx-auto transition-swing ma-3"
                  :class="`elevation-${hover ? 24 : 6}`"
                >
                  <v-card-title
                    >Hey <strong class="haupttitel">!</strong></v-card-title
                  >
                  <v-card-text class="text-center">
                    <p>
                      It's me
                      <strong class="haupttitel">Schmoaaaaah</strong> maybe you
                      also know me as <strong class="haupttitel">Noah</strong>.
                    </p>
                    <p>
                      So you found my website. Nice👌<span id="intelectuelspin"
                        >👌</span
                      >.
                    </p>
                    <p>
                      Please take a look at everything there is some
                      <strong class="haupttitel">Cool</strong
                      ><span>🕶</span> Stuff around
                    </p>
                  </v-card-text>
                </v-card>
              </template>
            </v-hover>
          </div>
        </v-main>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
export default {
  // Usage with context the component
  head: {
    title: 'Schmoaaaaah',
    // To use "this" in the component, it is necessary to return the object through a function
    meta: [
      { charset: 'utf-8' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      {
        name: 'msapplication-TileImage',
        content: '/favico/ms-icon-144x144.png',
      },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        rel: 'apple-touch-icon',
        size: '57x57',
        href: '/favico/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '60x60',
        href: '/favico/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '72x72',
        href: '/favico/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '76x76',
        href: '/favico/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '114x114',
        href: '/favico/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '120x120',
        href: '/favico/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '144x144',
        href: '/favico/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '152x152',
        href: '/favico/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/favico/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '192x192',
        href: '/favico/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: '/favico/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '96x96',
        href: '/favico/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '16x16',
        href: '/favico/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favico/manifest.json' },
    ],
  },
}
</script>

<style scoped>
@font-face {
  font-family: 'IKEA-SOFA-SANS';
  src: url('/fonts/IKEA-SOFA-SANS/IKEA-SOFA-SANS.ttf.woff');
  font-style: normal;
  font-weight: 400;
  font-display: auto;
}

#haupttitel {
  font-family: 'IKEA-SOFA-SANS';
  font-size: 18px;
}

#haupttitelnav {
  font-family: 'IKEA-SOFA-SANS';
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
</style>

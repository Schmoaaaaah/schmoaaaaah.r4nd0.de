<template>
  <v-container fluid class="pt-0">
    <v-row class="">
      <HeadNav />
      {content}
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    content: { type: Object, required: true },
  },
}
</script>

<style scoped></style>

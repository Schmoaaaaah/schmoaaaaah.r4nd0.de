<template>
  <ConstructionComponent />
</template>

<script>
import ConstructionComponent from "@/components/ConstructionComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "GamingView",
  components: {
    ConstructionComponent,
  },
  data() {
    return {
      //
    };
  },
});
</script>

<style scoped></style>

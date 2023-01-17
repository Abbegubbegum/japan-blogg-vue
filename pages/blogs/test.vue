<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
  data() {
    return {
      thing: "hello",
    };
  },
  methods: {
    Test() {
      this.thing;
    },
  },
});
</script>

<style scoped></style>

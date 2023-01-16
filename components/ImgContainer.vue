<script setup lang="ts">
import { ref } from "vue";
const props = defineProps(["id"]);

const data = ref({
  path: "",
  text: "",
});
</script>

<template>
  <div class="img-container">
    <label for="img-src">
      <h3>Img File Name:</h3>
      <input type="text" class="img-src" required />
    </label>

    <label for="img-text">
      <h3>Img Text:</h3>
      <input type="text" class="img-text" required />
    </label>
    <button
      class="rm-component-button"
      type="button"
      @click="$emit('removeElement', { id: props.id, type: 2 })"
    >
      Remove Element
    </button>
  </div>
</template>

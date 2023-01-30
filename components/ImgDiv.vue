<script setup lang="ts">
const props = defineProps({ txt: String, src: String });
</script>

<template>
  <div>
    <img :src="props.src" />
    <p>{{ props.txt }}</p>
  </div>
</template>

<style scoped>
img {
  max-width: 80%;
  max-height: 30rem;
}

p {
  font-size: 1.1rem;
  color: #666;
}
</style>

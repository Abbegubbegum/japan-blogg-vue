<script setup lang="ts">
const props = defineProps({ txt: String, title: String });
</script>
<template>
  <div>
    <h3 class="paragraph-title">{{ props.title }}</h3>
    <p class="paragraph-text">{{ props.txt }}</p>
  </div>
</template>

<style>
.paragraph-title {
  font-size: 3rem;
  font-weight: lighter;
}

.paragraph-text {
  font-size: 1.2rem;
}
</style>

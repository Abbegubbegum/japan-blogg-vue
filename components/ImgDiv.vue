<script setup lang="ts">
const props = defineProps({ txt: String, src: String });
</script>

<template>
  <div>
    <img src="{{ props.src }}" class="blog-img" />
    <p class="img-text">{{ props.txt }}</p>
  </div>
</template>

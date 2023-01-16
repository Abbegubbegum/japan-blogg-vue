<script setup lang="ts">
const props = defineProps({ txt: String, title: String });
</script>
<template>
  <div>
    <h3 class="paragraf-title">{{ props.title }}</h3>
    <p class="paragraf-text">{{ props.txt }}</p>
  </div>
</template>

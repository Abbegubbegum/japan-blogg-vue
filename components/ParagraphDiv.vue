<script setup lang="ts">
const props = defineProps({ txt: String, title: String });

const paragraphs = props.txt?.split("\n");
</script>

<template>
  <div>
    <h3>{{ props.title }}</h3>
    <p v-for="paragraph in paragraphs">{{ paragraph }}</p>
  </div>
</template>

<style scoped>
h3 {
  font-size: 3rem;
  font-weight: lighter;
}

p {
  font-size: 1.2rem;
}
</style>

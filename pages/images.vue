<script setup lang="ts">

const { data: images } = await useFetch("/api/images");

</script>

<template>
  <div class="img-wrapper">
    <div class="img-container">
      <a v-for="image in images" :href="'https://japanblog-imgs.s3.eu-central-1.amazonaws.com/' + image" target="_blank">
        <img :src="'https://japanblog-imgs.s3.eu-central-1.amazonaws.com/' + image"/>
      </a>
    </div>
  </div>
</template>

<style scoped>
.img-wrapper {
  width: 95%;
  margin: 0 auto;
}

.img-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}

img {
  max-height: 18rem;
}
</style>

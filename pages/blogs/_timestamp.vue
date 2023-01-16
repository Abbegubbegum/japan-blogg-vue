<script lang="ts" setup>
import { ref } from "vue";

let data = ref();

const route = useRoute()
    const id = computed(() => route.value.params.id)

fetch("/api/blogs?timestamp=")
  .then((res) => res.json())
  .then((rdata) => {
    rdata = data;
  });
</script>

<template>
  <div class="blogItem">
    <div class="blog-title">
      <p class="blog-date"></p>
      <h2>{{ data.title }}</h2>
      <div class="blog-subheading">
        <p class="blog-author"></p>
      </div>
    </div>
    <div class="blog-content"></div>
  </div>
</template>

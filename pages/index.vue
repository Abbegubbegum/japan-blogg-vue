<script setup lang="ts">
import { ref } from "vue";
import { BlogPost } from "~/types/types.js";

const blogs = ref<BlogPost[]>([]);

fetch("/api/blogs")
  .then((response) => response.json())
  .then((data: BlogPost[]) => {
    blogs.value = data;

    blogs.value.sort((a, b) => b.timestamp - a.timestamp);
  });

function redirectToIndividual(timestamp: number) {
  localStorage.setItem("timestamp", timestamp.toString());
  window.location.pathname = "/individual.html";
}
</script>

<template>
  <div>
    <div
      class="blog-item"
      v-for="blog in blogs"
      :key="blog.timestamp"
      @click=""
    >
      <div class="blog-title">
        <p class="blog-date">{{ blog.date }}</p>
        <h2>{{ blog.title }}</h2>
        <div class="blog-subheading">
          <p>By: {{ blog.author }}</p>
          <div class="location-div">
            <img src="@/assets/icons/pin.png" width="20" />
            <p class="blog-location">{{ blog.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

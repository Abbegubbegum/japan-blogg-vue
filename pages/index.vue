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
  <div id="blogContainer" class="content">
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
}

body {
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
}
.back-button {
  align-self: flex-start;
  margin: 1rem;
  margin-left: 2rem;
}

#blogContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 95%;
  align-self: center;
}

.blogItem {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid black;
  border-radius: 1rem;
  margin: 1rem 0;
}

.blogItem:hover {
  cursor: pointer;
  background-color: #eee;
}

.blog-title h2 {
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
}

.blog-title {
  margin: 2rem;
}

.blog-subheading {
  margin-top: 0.7rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.blog-author {
  font-size: 1.3rem;
  font-weight: bold;
}

.blog-location {
  font-size: 1.3rem;
  letter-spacing: 0rem;
  margin-left: 0.3rem;
}

.location-div {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.blog-date {
  position: absolute;
  right: 1rem;
  top: 0.8rem;
  font-size: 1.4rem;
}

.blog-content {
  margin: 2rem;
  margin-top: 0;
}

.blog-content > div {
  margin-bottom: 3rem;
}

.paragraf-title {
  font-size: 3rem;
  font-weight: lighter;
}

.paragraf-text {
  max-width: 80ch;
  font-size: 1.5rem;
}

.blog-img {
  max-width: 60rem;
  max-height: 30rem;
}

.img-text {
  font-size: 1.2rem;
}

#aboutContainer {
  display: flex;
  font-size: xx-large;
  width: 95%;
  align-self: center;
}
</style>

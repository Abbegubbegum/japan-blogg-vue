<script setup lang="ts">
import { ref } from "vue";

const images = ref<string[]>([]);

fetch("/api/img")
  .then((res) => {
    if (res.status !== 200) {
      throw new Error("bad");
    }
    return res.json();
  })
  .then((data: (string | { path: string })[]) => {
    // minus is a before b, positive is b before a
    data.sort((a, b): number => {
      let typeA = typeof a;
      let typeB = typeof b;

      if (typeA === typeB) {
        return 0;
      }

      switch (typeA) {
        case "string":
          return 1;
        case "object":
          return -1;
      }

      return 0;
    });

    images.value = data.map((image): string => {
      if (typeof image === "object") {
        return image.path;
      }
      return image;
    });
  })
  .catch((err) => {
    console.log(err);
    alert("Images failed to load. Please try again later!");
    window.location.pathname = "/";
  });
</script>

<template>
  <div class="img-wrapper">
    <div class="img-container">
      <img
        :src="'@/assets/imgs/' + image"
        class="indImg"
        v-for="image in images"
      />
    </div>
  </div>
</template>

<style scoped>
.img-wrapper {
  width: 95%;
}

.img-container {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
}

img {
  max-height: 20rem;
}
</style>

<template>
  <div class="blog-item">
    <div class="blog-title">
      <p class="blog-date">{{ data.date }}</p>
      <h2>{{ data.title }}</h2>
      <div class="blog-subheading">
        <p class="blog-author">By: {{ data.author }}</p>
        <div class="location-div">
          <img src="@/assets/icons/pin.png" alt="" width="20" />
          <p class="blog-location">{{ data.location }}</p>
        </div>
      </div>
    </div>
    <div class="blog-content">
      <div v-for="blog in data.content">
        <ImgDiv
          v-if="blog.type === 'img'"
          :src="getPath(blog)"
          :txt="blog.text"
        />
        <ParagraphDiv
          v-else-if="blog.type === 'txt'"
          :txt="blog.text"
          :title="getTitle(blog)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Image, Paragraph } from "@/types/types.js";
import ImgDiv from "@/components/ImgDiv.vue";
import { defineComponent } from "vue";
import ParagraphDiv from "~/components/ParagraphDiv.vue";

export default defineComponent({
  async asyncData({ params }) {
    const timestamp = params.timestamp;
    return { timestamp };
  },
  data() {
    return {
      data: {
        title: "",
        author: "",
        date: "",
        location: "",
        content: [] as (Image | Paragraph)[],
      },
      timestamp: "",
    };
  },
  methods: {
    getData() {
      console.log(this.timestamp);
      fetch("/api/blogs?timestamp=" + this.timestamp)
        .then((res) => res.json())
        .then((rdata) => {
          this.data = rdata;
        });
    },
    getPath(blog: Paragraph | Image) {
      return (blog as Image).path;
    },
    getTitle(blog: Paragraph | Image) {
      return (blog as Paragraph).title;
    },
  },
  mounted() {
    this.getData();
  },
  components: { ImgDiv, ParagraphDiv },
});
</script>

<style scoped>
.blog-item {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid black;
  border-radius: 1rem;
  width: 95%;
  margin: 1rem 0;
  margin-left: auto;
  margin-right: auto;
}
.blog-title h2 {
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
}

.blog-title {
  margin: 2rem;
}
.blog-date {
  position: absolute;
  right: 1rem;
  top: 0.8rem;
  font-size: 1.4rem;
}
.blog-author {
  font-size: 1.3rem;
  font-weight: bold;
}
.location-div {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.blog-location {
  font-size: 1.3rem;
  letter-spacing: 0rem;
  margin-left: 0.3rem;
}
.back-button {
  align-self: flex-start;
  margin: 1rem;
  margin-left: 2rem;
}

.blog-content {
  margin: 2rem;
  margin-top: 0;
}

.blog-content > div {
  margin-bottom: 3rem;
}

.blog-subheading {
  margin-top: 0.7rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>

<script setup lang="ts">
import { Image, Paragraph } from "@/types/types.js";
import ImgDiv from "@/components/ImgDiv.vue";
import { defineComponent } from "vue";
import ParagraphDiv from "~/components/ParagraphDiv.vue";
</script>

<template>
  <div class="blogItem">
    <div class="blog-title">
      <p class="blog-date">{{ data.date }}</p>
      <h2>{{ data.title }}</h2>
      <div class="blog-subheading">
        <p class="blog-author">By: {{ data.author }}</p>
        <div class="location-div">
          <img src="" alt="" />
          <p class="blog-location">{{ timestamp }}</p>
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
export default defineComponent({
  async asyncData({ params }) {
    const timestamp = params.timestamp; // When calling /abc the slug will be "abc"
    return { timestamp };
  },
  data() {
    return {
      data: {
        title: "",
        author: "",
        date: {} as Date,
        location: "",
        content: [] as (Image | Paragraph)[],
      },
      timestamp: "t",
    };
  },
  methods: {
    getData() {
      console.log(this.timestamp);
      fetch("/api/blogs?timestamp=" + this.timestamp)
        .then((res) => res.json())
        .then((rdata) => {
          rdata = this.data;
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

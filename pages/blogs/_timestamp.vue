<script lang="ts">
import { ref } from "vue";
import { Image, Paragraph } from "@/types/types.js";
import ImgDiv from "@/components/ImgDiv.vue";
import { defineComponent } from "vue";
import ParagraphDiv from "~/components/ParagraphDiv.vue";
export default defineComponent({
  async asyncData({ params }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
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
    };
  },
  methods() {
    function getData() {
      fetch("/api/blogs?timestamp=" + this.slug)
        .then((res) => res.json())
        .then((rdata) => {
          rdata = this.data;
        });
    }
  },
  components: { ImgDiv, ParagraphDiv },
});
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
          <p class="blog-location"></p>
        </div>
      </div>
    </div>
    <div class="blog-content">
      <div v-for="blog in data.content">
        <ImgDiv
          v-if="blog.type === 'img'"
          src="{{blog.path}}"
          txt="{{ blog.text }}"
        />
        <ParagraphDiv
          v-else-if="blog.type === 'txt'"
          txt="{{ blog.text }}"
          title="{{ blog.title }}"
        />
      </div>
    </div>
  </div>
</template>

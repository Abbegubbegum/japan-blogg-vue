<script setup lang="ts">
import ParagraphContainer from "../components/ParagraphContainer.vue";
import ImgContainer from "../components/ImgContainer.vue";
import { ref } from "vue";

type container = {
  id: number;
  type: number;
};
type img = {
  path: string;
  text: string;
};
type paragraph = {
  title: string;
  text: string;
};

let title = ref("");
let author = ref("");
let date = ref<Date>();
let location = ref("");
let password = ref("");

let order = ref<container[]>([
  { id: 123, type: 1 },
  { id: 321, type: 2 },
]);

function addParagraph() {
  order.value.push({ id: Math.floor(Math.random() * 10000), type: 1 });
}
function addIMG() {
  order.value.push({ id: Math.floor(Math.random() * 10000), type: 2 });
}

function removeElement(props: container) {
  console.log(props);
  console.log();
  let pos = order.value.findIndex((t) => t.id === props.id);
  if (pos !== -1) {
    console.log(pos);
    order.value.splice(pos, 1);
  }
}

async function sendForm() {
  let content: paragraph | img[] = [];

  const res = await fetch("api/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      author: author,
      location: location,
      date: date,
      content: content,
      password: password,
    }),
  });

  if (res.ok && res.status === 200) {
    alert(await res.text());
    window.location.pathname = "/";
  } else {
    alert(await res.text());
  }
}
</script>

<template>
  <div>
    <div>
      <button class="addButtons" @click="addParagraph">Add paragraph</button>
      <button class="addButtons" @click="addIMG">Add IMG</button>
    </div>
    <div>
      <h1>Fill in this form</h1>
      <form id="form" @submit.prevent="sendForm()">
        <label for="blog-name">
          <h3>Title:</h3>
          <input
            v-model="title"
            type="text"
            class="blog-name"
            id="title"
            required
          />
        </label>

        <label for="blog-author">
          <h3>Author:</h3>
          <input
            v-model="author"
            type="text"
            class="blog-author"
            id="author"
            required
          />
        </label>

        <label for="date-input">
          <h3>Date:</h3>
          <input v-model="date" type="date" required />
        </label>

        <label for="location-input">
          <h3>Location:</h3>
          <input v-model="location" type="text" id="location" required />
        </label>

        <div id="blog-content-container">
          <div v-for="content in order">
            <ParagraphContainer
              v-if="content.type === 1"
              :id="content.id"
              @removeElement="removeElement"
            />
            <ImgContainer
              v-else-if="content.type === 2"
              :id="content.id"
              @removeElement="removeElement"
            />
          </div>
        </div>

        <label for="password-input" id="password-container">
          <h3>Password:</h3>
          <input
            v-model="password"
            type="password"
            id="password-input"
            required
          />
        </label>

        <label for="submit">
          <button type="submit" class="submit-button">Submit</button>
        </label>
      </form>
    </div>
  </div>
</template>
<style>
input[type="text"] {
  border-radius: 5px;
  padding: 2.5px;
  margin: 10px;
}

input[type="date"] {
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
}

.paragraph-text {
  border: 2.2px solid black;
  border-radius: 5px;
  padding: 2.5px;
  margin: 10px;
}

input[type="password"] {
  border-radius: 5px;
  padding: 2.5px;
  margin: 10px;
  max-width: 60%;
}

.RMElementButton {
  border-radius: 5px;
  padding: 2.5px;
  margin: 10px;
  max-width: 10%;
  padding: 5px;
}

.paragraph-container {
  background-color: rgb(230, 227, 227);
  padding-top: 2px;
  padding-left: 7.5px;
  padding-right: 7.5px;
  padding-bottom: 7.5px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-container {
  background-color: rgb(230, 227, 227);
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  text-align: center;
}

.submit-container {
  display: flex;
  justify-content: center;
  padding: 5px;
}

.submit-button {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 5px;
}

.paragraph-button {
  padding: 10px;
  margin: 5px;
}

#password-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.addButtons {
  margin: 5px;
  padding: 5px;
}
</style>

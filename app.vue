<template>
  <div>
    <header>
      <h1>Japan Blogg NTIG T4-22</h1>

      <nav>
        <NuxtLink to="/" class="link">HOME</NuxtLink>
        <NuxtLink to="/images" class="link">IMAGES</NuxtLink>
        <NuxtLink to="/about" class="link">ABOUT</NuxtLink>
      </nav>
    </header>

    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  align-self: center;
  margin-top: 1rem;
}

nav {
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  background-color: #bc002d;
  margin: 1rem;
  width: 85%;
  border-radius: 5px;
}

.link {
  width: 100%;
  color: white;
  padding: 0.5rem;
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;
}

a:hover {
  background-color: #cf0030;
  border-radius: 5px;
}
</style>

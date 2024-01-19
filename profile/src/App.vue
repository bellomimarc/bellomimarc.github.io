<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">

      <div>
        <div style="font-size: 3rem;">
          <span style="color: var(--el-color-info)">
            Hi, I'm
          </span>
          <span style="text-wrap: nowrap; color: var(--el-color-success);">Marcello Bellomi</span>
        </div>
        <div>
          <el-text type="info" style="font-size: 2rem;">Architect and Developer</el-text>
        </div>
        <el-divider />
        <div style="font-size: 1.5rem; color: var(--el-color-info)">I'll strive to combine pragmatism and creativity every day to deliver cutting-edge solutions.</div>
      </div>

      <nav>
        <RouterLink to="/"><el-link type="primary">Home</el-link></RouterLink>
        <RouterLink to="/workexperience"><el-link type="primary">Work experience</el-link></RouterLink>
        <RouterLink to="/skills"><el-link type="primary">Skills</el-link></RouterLink>
        <RouterLink to="/contacts"><el-link type="primary">Contacts</el-link></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

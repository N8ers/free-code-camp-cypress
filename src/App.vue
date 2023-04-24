<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="nav-bar">
      <h1>Free Code Camp - Cypress Talk</h1>
      <h4 class="repo-link">
        Companion Repository:
        <a href="https://github.com/N8ers/free-code-camp-cypress"
          >https://github.com/N8ers/free-code-camp-cypress</a
        >
      </h4>
      <RouterLink to="/finding-and-asserting">Finding And Asserting</RouterLink>
      <RouterLink to="/iterating-assertions">Iterating Assertions</RouterLink>
      <RouterLink to="/user-interactions">User Interactions</RouterLink>
      <RouterLink to="/url-validation">URL Validation</RouterLink>
      <RouterLink to="/network-requests">Network Requests</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>

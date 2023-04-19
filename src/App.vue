<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/finding-and-asserting">Finding And Asserting</RouterLink> |
    <RouterLink to="/iterating-assertions">Iterating Assertions</RouterLink> |
    <RouterLink to="/user-interactions">User Interactions</RouterLink> |
    <RouterLink to="/url-validation">URL Validation</RouterLink> |
    <RouterLink to="/network-requests">Network Requests</RouterLink>
    <RouterView />
  </div>
</template>

<style scoped></style>

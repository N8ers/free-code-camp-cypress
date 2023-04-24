<script setup>
import { ref } from 'vue'

const testThreeList = ref(['throw rocks', 'wear socks', 'eat trash', 'avoid responsibility'])
</script>

<template>
  <div>
    <h1>Iterating Assertions</h1>
    <ul>
      <li v-for="item in testThreeList" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

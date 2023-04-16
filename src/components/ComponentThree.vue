<script setup>
import { ref } from 'vue'

const testThreeList = ref(['a', 'b', 'c', 'd'])
</script>

<template>
  <div>
    <h2>Test 3</h2>
    <ul>
      <li v-for="item in testThreeList" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>

  <hr />
</template>

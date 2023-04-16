<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>
    <h2>Test 4</h2>
    <h3>Count: {{ count }}</h3>
    <div>
      <button @click="count = count + 1">add one</button>
      <button @click="count = count - 1">subtract one</button>
    </div>
  </div>

  <hr />
</template>

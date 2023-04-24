<script setup>
import { ref } from 'vue'

const count = ref(0)
const text = ref('')
</script>

<template>
  <div>
    <div>
      <h1>User Interactions</h1>
      <h3 data-test="count">Count: {{ count }}</h3>
      <div>
        <button data-test="addOne" @click="count = count + 1">add one</button>
        <button data-test="subtractOne" @click="count = count - 1">subtract one</button>
      </div>
    </div>

    <div>
      <h3 data-test="inputValue">Input Value: {{ text }}</h3>
      <input data-test="inputField" type="text" v-model="text" />
    </div>
  </div>
</template>

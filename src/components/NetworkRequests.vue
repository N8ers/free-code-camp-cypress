<script setup>
import { ref } from 'vue'

const jedi = ref('')

const requestUsers = async () => {
  const result = await fetch('https://swapi.dev/api/people/1/')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }
      return response.json()
    })
    .catch((err) => console.error(`Fetch problem: ${err.message}`))

  jedi.value = result.name
}
</script>

<template>
  <div>
    <h1>Network Requests</h1>
    <div data-test="coolestJedi">Coolest Jedi: {{ jedi }}</div>
    <button @click="requestUsers">Make a network request to find out</button>
  </div>
</template>

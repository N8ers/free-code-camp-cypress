<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const testThreeList = ref(['a', 'b', 'c', 'd'])
const count = ref(0)
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

const navigateToListItem = (itemId = null) => {
  if (itemId) {
    router.push({ name: 'home', query: { 'selected-item': itemId } })
  } else {
    router.push({ name: 'home', query: {} })
  }
}
</script>

<template>
  <div>
    <h2>Test 1 & 2</h2>
    <p>Hello Cypress</p>
  </div>

  <hr />

  <div>
    <h2>Test 3</h2>
    <ul>
      <li v-for="item in testThreeList" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>

  <hr />

  <div>
    <h2>Test 4</h2>
    <h3>Count: {{ count }}</h3>
    <div>
      <button @click="count = count + 1">add one</button>
      <button @click="count = count - 1">subtract one</button>
    </div>
  </div>

  <hr />

  <div>
    <h2>Test 5</h2>
    <div>Coolest Jedi: {{ jedi }}</div>
    <button @click="requestUsers">Make a network request to find out</button>
  </div>

  <hr />

  <div>
    <h2>Test 6</h2>
    <button @click="navigateToListItem(1)">1</button>
    <button @click="navigateToListItem(2)">2</button>
    <button @click="navigateToListItem(3)">3</button>
    <button @click="navigateToListItem()">reset</button>
  </div>
</template>

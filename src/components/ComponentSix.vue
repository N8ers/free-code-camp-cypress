<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

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
    <h2>Test 6</h2>
    <button @click="navigateToListItem(1)">1</button>
    <button @click="navigateToListItem(2)">2</button>
    <button @click="navigateToListItem(3)">3</button>
    <button @click="navigateToListItem()">reset</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToListItem = (itemId = null) => {
  if (itemId) {
    router.push({ path: '/url-validation', query: { 'selected-item': itemId } })
  } else {
    router.push({ path: '/url-validation', query: {} })
  }
}
</script>

<template>
  <div>
    <h1>URL Validation</h1>
    <button data-test="buttonOne" @click="navigateToListItem(1)">1</button>
    <button data-test="buttonTwo" @click="navigateToListItem(2)">2</button>
    <button data-test="buttonThree" @click="navigateToListItem(3)">3</button>
    <button data-test="resetButton" @click="navigateToListItem()">reset</button>
  </div>
</template>

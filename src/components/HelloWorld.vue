<script setup lang="ts">
import { ref, onMounted } from 'vue'
const message = ref('HelloWorld')
const showMessage = () => console.log(`this message is ${message.value}`)
onMounted(() => {
  showMessage()
})
// defineProps({ name: String})
</script>

<template>
  <h1>{{ message }}</h1>
</template>

<style scoped>
h1 {
  color: red;
}
</style>

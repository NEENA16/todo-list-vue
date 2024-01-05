<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
<template>
  <h1>About</h1>
  <button @click="()=>router.back()">Go Back</button>
</template>

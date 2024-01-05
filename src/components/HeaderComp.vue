<script setup lang="ts">
// defineProps({
//   message: {
//     type: String
//   },
//   onClick: {
//     type: () => void
//   }

import { useTaskStore } from '@/store/TaskStore';

// })
defineProps(['message','onClick','showForm'])
const taskStore = useTaskStore()

</script>
<template>
  <header>
    <span>
      {{ message }}
    </span>
    <button class="addTask" @click.stop=taskStore.toogle>{{taskStore.showForm?'Close':'Add Task'}}</button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}
.addTask {
  background-color: black;
  color: white;
  padding: 4px;
}
</style>

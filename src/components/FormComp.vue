<script setup lang="ts">
import type { task } from '@/types/task'
import { onMounted, ref } from 'vue'
const name = ref<string>('')
const date = ref<string>('')
const emit = defineEmits({
  createTask: (newTask: task) => true,
  updateTaskEmit: (newTask: task) => true
})
const createNewTask = () => {
  const newTask = { key: Math.random().toString(), name: name.value, date: date.value }
  emit('createTask', newTask)
}
// console.log('name', name)

const props = defineProps<{ updateTask: task }>()

const updateTaskFun = () => {
  // console.log('YAyyyyyyy')
  emit('updateTaskEmit', { name: name.value, date: date.value, key: props.updateTask.key })
}

console.log('update val', props.updateTask)
onMounted(() => {
  name.value = props.updateTask.name
  date.value = props.updateTask.date
})
</script>
<template>
  <div class="wrapper">
    <span class="nameLabel">Task Name</span>
    <input class="nameInput" type="text" v-model="name" />
    <span class="dateLabel">Date</span>
    <input class="dateInput" type="text" v-model="date" />
    <span class="reminder">
      <span>Set Reminder?</span>
      <input type="checkbox" />
    </span>
    <button @click="updateTask.key === '' ? createNewTask() : updateTaskFun()">
      {{ updateTask.key === '' ? 'Create Task' : 'Edit Task' }}
    </button>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.nameLabel {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nameInput {
  margin-bottom: 10px;
}
.dateLabel {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dateInput {
  margin-bottom: 10px;
}
.reminder {
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>

<script setup lang="ts">
import HeaderComp from './HeaderComp.vue'
import ToDo from './ToDo.vue'
// import { ref } from 'vue'
import FormComp from './FormComp.vue'
// import type { task } from '@/types/task'
import { useTaskStore } from '@/store/TaskStore'
import { useRouter } from 'vue-router'

const taskStore = useTaskStore()
// const todoList = ref([
//   { key: '1', name: 'Task1', date: '1/1/12' },
//   { key: '2', name: 'Task2', date: '1/1/12' },
//   { key: '3', name: 'Task3', date: '1/1/12' }
// ])

// const todoList = ref(taskStore.todoList)

// const showForm = ref<boolean>(false)
// const showForm = ref<boolean>(taskStore.showForm)

// const deleteTask = (key: String) => {
//   const filteredDate = todoList.value.filter((item: task) => item.key !== key)
//   todoList.value = filteredDate
//   console.log('on delete', filteredDate)
// }
// watch(taskStore.showForm, () => {})

// const updateTask = ref<task>({ name: '', date: '', key: '' })
// const createTask = (item: task) => {
//   todoList.value.push(item)
// }
// const createTask=taskStore.createTask

// const toogle = () => {
//   showForm.value = !showForm.value
// }

// const editTask = (id: string) => {
//   taskStore.toogle()
//   const editTaskCard = todoList.value.find((item: task) => item.key === id)
//   updateTask.value = editTaskCard || { name: '', date: '', key: '' }
// }
// const editTask=taskStore.editTask

// const appendTask = (item: task) => {
//   const toApendItemIndex = todoList.value.findIndex((card) => card.key === item.key)
//   todoList.value[toApendItemIndex] = item
// }
// const appendTask=taskStore.appendTask
const router = useRouter()
</script>
<template>
  <div class="header">
    <HeaderComp message="Hello Neena" />
    <div v-if="taskStore.showForm">
      <FormComp
        @create-task="taskStore.createTask"
        :update-task="taskStore.updateTask"
        @update-task-emit="taskStore.appendTask"
      />
    </div>
    <ToDo
      v-for="todo in taskStore.todoList"
      :title="todo.name"
      :date="todo.date"
      :id="todo.key"
      :key="todo.key"
      @delete-task="taskStore.deleteTask"
      @edit-task="taskStore.editTask(todo.key)"
    />
  </div>
  <!-- act as anchor tag, does not refresh the page -->
  <RouterLink to="/about">Click Me</RouterLink>
  <div>
    <!-- on button click navigate to about component -->
    <button @click="() => router.push('/about')">Click Button</button>
  </div>
  <RouterView/> <!-- to show nested compoenet just below main comp -->
</template>
<style scoped>
.header {
  border: solid 1px;
  padding: 15px;
  border-radius: 4px;
  justify-content: space-between;
}
</style>

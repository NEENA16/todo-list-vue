import type { task } from '@/types/task'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const todoList = ref([
    { key: '1', name: 'Task1', date: '1/1/12' },
    { key: '2', name: 'Task2', date: '1/1/12' },
    { key: '3', name: 'Task3', date: '1/1/12' }
  ])

  const showForm = ref<boolean>(false)
  const createTask = (item: task) => {
    todoList.value.push(item)
  }
  const toogle = () => {
    showForm.value = !showForm.value;
    console.log("Toggle");
    
  }
  const updateTask = ref<task>({ name: '', date: '', key: '' })
  const editTask = (id: string) => {
    toogle()
    const editTaskCard = todoList.value.find((item: task) => item.key === id)
    updateTask.value = editTaskCard || { name: '', date: '', key: '' }
  }
  const appendTask = (item: task) => {
    const toApendItemIndex = todoList.value.findIndex((card) => card.key === item.key)
    todoList.value[toApendItemIndex] = item
  }
  const deleteTask = (key: String) => {
    const filteredDate = todoList.value.filter((item: task) => item.key !== key)
    todoList.value = filteredDate
  }
  return {
    todoList,
    showForm,
    createTask,
    toogle,
    updateTask,
    editTask,
    appendTask,
    deleteTask
  }
})

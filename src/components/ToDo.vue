<script setup lang="ts">
defineProps({
  title: {
    type: String
  },
  date: {
    type: String
  },
  id: {
    type: String
  }
})
defineEmits({
  deleteTask: (key: string) => true,
  editTask: (key: string) => true
})
</script>
<template>
  <div class="wrapper" @click="$emit('editTask', id)">
    <div class="data">
      <div class="date-icon">
        <span class="title">{{ title }}</span>
        {{ date }}
      </div>
      <span @click="$emit('deleteTask', id)">
        <i class="fas fa-trash-can"></i>
      </span>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  background-color: grey;
  margin-bottom: 10px;
  margin-top: 10px;
}
.data {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  align-items: center;
}
.title {
  font-weight: 800;
}
.date-icon {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  margin-right: 20px; */
}
</style>

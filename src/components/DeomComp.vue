<template>
    <div>
        {{ name }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    name:{
        type:String,
        default:'ABC'
    }
})
</script>
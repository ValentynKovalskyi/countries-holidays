<template>
  <button class="rounded-lg border-0 h-10 bg-gradient-to-tr from-black to-blue-300">{{ text }}</button>
</template>
<script setup lang="ts">
interface Props {
  text: string
}
defineProps<Props>()
</script>
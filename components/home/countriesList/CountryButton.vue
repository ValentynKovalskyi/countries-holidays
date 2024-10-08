<template>
  <button class="rounded-lg border-0 p-3 bg-gradient-to-tr from-slate-500 to-blue-200
  hover:from-blue-200 hover:to-slate-500 shadow-md shadow-black text-white hover:shadow-lg hover:shadow-black transition-all duration-300">
      {{ name }}
  </button>
</template>
<script setup lang="ts">
interface Props {
  name: string
}

defineProps<Props>()
</script>
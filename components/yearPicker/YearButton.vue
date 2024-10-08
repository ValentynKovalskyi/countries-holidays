<template>
    <button
        class="rounded-lg border-0 px-3 py-1 bg-gradient-to-tr from-slate-500 to-blue-200 hover:from-blue-200 hover:to-slate-500 shadow-md shadow-black text-white hover:shadow-lg hover:shadow-black transition-all duration-75"
        :class="{
            'shadow-none bg-gradient-to-br from-slate-300 to-blue-200 text-slate-500 border-slate-500 border-2':
                isActive,
        }"
        @click="emit('updateSelected', year)"
    >
        {{ year }}
    </button>
</template>
<script setup lang="ts">
interface Props {
    year: string;
    isActive: boolean;
}

const emit = defineEmits<{
    (e: 'updateSelected', year: string): void;
}>();

defineProps<Props>();
</script>

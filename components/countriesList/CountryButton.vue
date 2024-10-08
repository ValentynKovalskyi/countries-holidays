<template>
    <button
        class="rounded-lg border-0 p-3 bg-gradient-to-tr from-slate-500 to-blue-200 hover:from-blue-200 hover:to-slate-500 shadow-md shadow-black text-white hover:shadow-lg hover:shadow-black transition-all duration-300"
        @click="handleClick"
    >
        {{ name }}
    </button>
</template>
<script setup lang="ts">
interface Props {
    name: string;
    code: string;
}
const props = defineProps<Props>();

const handleClick = () => {
    navigateTo(`/country/${props.code}`);
};
</script>

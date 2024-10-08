<template>
    <div
        class="rounded-lg flex flex-col h-1/3 w-full bg-gradient-to-tr from-blue-200 to-slate-500 p-4 font-semibold shadow-md shadow-slate-500 hover:shadow-lg hover:shadow-black transition-all duration-300"
    >
        <h2>{{ holiday.name }}</h2>
        <h3>{{ holiday.date }}</h3>
        <h3>Local Name: {{ holiday.localName }}</h3>
        <h3 v-if="holiday.launchYear">Launch Year: {{ holiday.launchYear }}</h3>
        <h3 v-if="holiday.global">Global</h3>
    </div>
</template>
<script setup lang="ts">
import type { Holiday } from '@types/holiday.type';

interface HolidayCardProps {
    holiday: Holiday;
}

defineProps<HolidayCardProps>();
</script>

<template>
    <div class="flex flex-row w-full h-full justify-evenly items-center">
        <YearPickerYearButton
            v-for="year of years"
            :key="year"
            :year="year"
            :is-active="year === selectedYear"
            @update-selected="handleUpdateSelected"
        />
    </div>
</template>
<script setup lang="ts">
import { YEARS } from '@constants/years.constant';

const years = ref<string[]>(YEARS);
const selectedYear = ref<string>(new Date().getFullYear().toString());

const emit = defineEmits<{
    (e: 'updateYear', year: string): void;
}>();

const handleUpdateSelected = (year: string) => {
    selectedYear.value = year;
    emit('updateYear', year);
};
</script>

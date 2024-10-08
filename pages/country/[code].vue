<template>
    <div class="h-full flex flex-col p-5">
        <div>
            <h2 class="font-semibold text-xl p-4">{{ countryName }}</h2>
        </div>
        <div class="h-2/3 p-5">
            <HolidayList :holidays="holidays" />
        </div>
        <div class="w-full h-full p-3 shadow-lg shadow-black rounded-2xl my-4">
            <YearPicker @update-year="handleUpdateYear" />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Holiday } from '@types/holiday.type';
import { getHolidays } from '@api/getHolidays';
import { getCountry } from '@api/getCountryName';

const route = useRoute();
const countryName = ref<string>();
const year = ref<string>(new Date().getFullYear().toString());
const holidays = ref<Holiday[]>([]);

const fetchHolidays = async () =>
    (holidays.value = await getHolidays(year.value, route.params.code));
const handleUpdateYear = (newYear: string) => {
    year.value = newYear;
};

watch(
    () => year.value,
    async () => {
        await fetchHolidays();
    }
);

onMounted(async () => {
    countryName.value = (await getCountry(route.params.code)).commonName;
    await fetchHolidays();
});

definePageMeta({
    name: 'country',
    layout: 'home',
});
</script>

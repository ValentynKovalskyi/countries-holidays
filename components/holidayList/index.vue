<template>
    <div class="overflow-y-scroll no-scrollbar h-full flex flex-col gap-5 p-5">
        <template v-for="holiday of holidays" :key="holiday.name">
           <HolidayListHolidayCard :holiday="holiday" />
        </template>
    </div>
</template>
<script setup lang="ts">
import type { Holiday } from "@types/holiday.type";

interface ListProps {
  holidays: Holiday[]
}

defineProps<ListProps>()
</script>
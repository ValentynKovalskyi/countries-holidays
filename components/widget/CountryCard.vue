<template>
  <div class="rounded-lg flex flex-col h-1/3 w-full bg-gradient-to-tr from-blue-200 to-slate-500 p-4
  font-semibold shadow-md shadow-slate-500 hover:shadow-2xl hover:shadow-black transition-all duration-300">
      <h3 class="">{{ countryInfo.countryName }}</h3>
      <h3>{{ countryInfo.nextHoliday }}</h3>
      <h3>{{ countryInfo.date }}</h3>
  </div>
</template>
<script setup lang="ts">
import type { WidgetCountryInfo } from "@types/widgetCountryInfo.type";

interface CardProps {
  countryInfo: WidgetCountryInfo
}

defineProps<CardProps>()
</script>
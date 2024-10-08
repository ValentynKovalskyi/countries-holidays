<template>
  <div class="flex flex-col p-5 gap-5 h-5/6" v-if="randomCountries.length === 3">
      <WidgetCountryCard
              v-for="index of [0, 1, 2]"
              :key="randomCountries[index].countryCode"
              :country-info="randomCountries[index]"
      />
  </div>
</template>
<script setup lang="ts">
import type { Country } from "@types/country.type";
import { getNextHolidayByCode } from "@api/getNextHolidayByCode";
import type { WidgetCountryInfo } from "@types/widgetCountryInfo.type";

interface WidgetProps {
  countries: Country[]
}

const props = defineProps<WidgetProps>()
const randomCountries = ref<Country[]>([])

const pickRandomCountries = async () => {
  for (let index = 0; index < 3; ++index) {
    const randomIndex = Math.round(Math.random() * props.countries.length)
    const randomCountry = props.countries[randomIndex]
    const nextHoliday = await getNextHolidayByCode(randomCountry.countryCode)

    const widgetCountryInfo: WidgetCountryInfo = {
      countryName: randomCountry.name,
      countryCode: randomCountry.countryCode,
      nextHoliday: nextHoliday.name,
      date: nextHoliday.date,
    }

    randomCountries.value.push(widgetCountryInfo)
  }
}

onMounted(async () => {
  await pickRandomCountries()
})
</script>
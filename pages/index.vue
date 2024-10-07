<template>
  <div class="flex flex-row">
      <div class="flex flex-col">
          <div></div>
          <HomeCountriesList v-if="countries" :countries="filteredCountries"/>
      </div>
  </div>
</template>

<script setup lang="ts">
import type { Country } from "@types/country.type";

const countries = ref<Country[]>()
const filteredCountries = computed(() => {
  return countries
})

onMounted(async () => {
  const fetchCountries = await fetch('https://date.nager.at/api/v3/AvailableCountries')

  if(fetchCountries.ok) {
    countries.value = await fetchCountries.json()
  }
})

definePageMeta({
  name: 'index',
  layout: "home"
})
</script>

<style scoped>

</style>
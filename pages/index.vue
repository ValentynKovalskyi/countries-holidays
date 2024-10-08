<template>
  <div class="max-h-screen flex flex-row">
      <div class="w-1/3 flex flex-col">
          <div class="px-5 pt-5 bg-blue-300 w-full">
              <SearchField @update="handleSearchUpdate"/>
          </div>
          <div class="h-full p-5">
              <h2 class="font-semibold text-xl p-4">Countries List</h2>
              <HomeCountriesList v-if="countries && filteredCountries.length !== 0" :countries="filteredCountries"/>
              <div v-else-if="countries" class="font-semibold text-xl p-4">
                  <p>No countries found</p>
              </div>
              <div v-else class="items-center justify-center">Loading</div>
          </div>
      </div>
      <div class="w-2/3 h-screen flex flex-col">
          <div class="p-5 bg-blue-300">
              <h2 class="font-semibold text-xl p-4">Random Countries Widget</h2>
          </div>
          <div class="h-screen p-5 bg-blue-300" v-if="countries">
              <Widget :countries="countries" />
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import type { Country } from "@types/country.type";

const countries = ref<Country[]>()
const searchValue = ref<string>('')

const filteredCountries = computed(() => {
  return countries.value?.filter((country) => country.name.toLowerCase().includes(searchValue.value.toLowerCase()))
})


const handleSearchUpdate = (newValue: string) => searchValue.value = newValue

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
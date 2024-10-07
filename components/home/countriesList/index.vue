<template>
  <div>
      <HomeCountriesListCountryButton v-for="country of countries" :key="country.name"/>
  </div>
</template>
<script setup lang="ts">
import type { Country } from "@types/country.type";

interface ListProps {
  countries: Country[]
}

defineProps<ListProps>()
</script>
<template>
    <div class="overflow-y-scroll no-scrollbar h-5/6 flex flex-col gap-5 px-5">
        <template v-for="country of countries" :key="country.name">
            <CountriesListCountryButton
                :name="country.name"
                :code="country.countryCode"
            />
        </template>
    </div>
</template>
<script setup lang="ts">
import type { Country } from '@types/country.type';

interface ListProps {
    countries: Country[];
}

defineProps<ListProps>();
</script>

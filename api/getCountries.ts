export const getCountries = async () => {
    try {
        const config = useRuntimeConfig()
        const fetchCountries = await fetch(
            config.public.API_URL + '/AvailableCountries'
        );

        if (fetchCountries.ok) {
            return await fetchCountries.json();
        }
    } catch (e) {
        throw new Error('Error occured during fetching countries.');
    }
};

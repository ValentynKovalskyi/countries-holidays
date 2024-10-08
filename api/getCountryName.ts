export const getCountry = async (countryCode: string) => {
    try {
        const config = useRuntimeConfig()
        const fetchCountry = await fetch(
            config.public.API_URL + `/CountryInfo/${countryCode}`
        );
        if (fetchCountry.ok) {
            return await fetchCountry.json();
        }
    } catch (e) {
        throw new Error('Error occured during fetching country info');
    }
};

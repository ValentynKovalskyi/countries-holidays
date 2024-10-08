export const getHolidays = async (year: string, countryCode: string) => {
    try {
        const config = useRuntimeConfig()
        const fetchedHolidays = await fetch(
            config.public.API_URL + `/PublicHolidays/${year}/${countryCode}`
        );

        if (fetchedHolidays.ok) {
            return await fetchedHolidays.json();
        }
    } catch (e) {
        throw new Error('Error occurred during fetching holidays.');
    }
};

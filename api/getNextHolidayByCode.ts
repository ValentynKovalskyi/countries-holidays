export const getNextHolidayByCode = async (countryCode: string) => {
    try {
        const config = useRuntimeConfig()
        const fetchNextPublicHolidays = await fetch(
            config.public.API_URL + `/NextPublicHolidays/${countryCode}`
        );

        if (fetchNextPublicHolidays.ok) {
            const holidays = await fetchNextPublicHolidays.json();
            return holidays[0];
        }
    } catch (e) {
        throw Error('Error occurred during loading of next holiday info');
    }
};

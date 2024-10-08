export const getHolidays = async (year: string, countryCode: string) => {
    try {
        const fetchedHolidays = await fetch(
            `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`
        );

        if (fetchedHolidays.ok) {
            return await fetchedHolidays.json();
        }
    } catch (e) {
        throw new Error('Error occurred during fetching holidays.');
    }
};

export const getCountry = async (countryCode: string) => {
    try {
        const fetchCountry = await fetch(
            `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
        );
        if (fetchCountry.ok) {
            return await fetchCountry.json();
        }
    } catch (e) {
        throw new Error('Error occured during fetching country info');
    }
};

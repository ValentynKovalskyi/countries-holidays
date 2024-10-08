export const getCountries = async () => {
  try {
    const fetchCountries = await fetch('https://date.nager.at/api/v3/AvailableCountries')

    if(fetchCountries.ok) {
      return  await fetchCountries.json()
    }
  } catch (e) {
    throw new Error('Error occured during fetching countries.')
  }
}

export const getNextHolidayByCode = async (countryCode: string) => {
  try {
    const fetchNextPublicHolidays = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`)

    if(fetchNextPublicHolidays.ok) {
      const holidays = await fetchNextPublicHolidays.json()
      return holidays[0]
    }
  } catch (e) {
    throw Error('Error occurred during loading of next holiday info')
  }
}
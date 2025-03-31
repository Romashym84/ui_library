const BASE_URL = `https://nominatim.openstreetmap.org`

export const API_LOCATION = {
  async searchLocation(query, countryCode) {
    const response = await fetch(
      `${BASE_URL}/search?format=json&q=${query}&extratags=1&countrycodes=${countryCode}`,
    )

    return await response.json()
  },
}

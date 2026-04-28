export const resolveCityText = (text, cityName, countryName) =>
  text?.replaceAll("{cityName}", cityName || countryName || "cityname");
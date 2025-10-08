const BASE = 'https://www.metaweather.com/api/';

export async function fetchLocationId(city) {
  const res = await fetch(`${BASE}location/search/?query=${encodeURIComponent(city)}`);
  const data = await res.json();
  if (!data || data.length === 0) throw new Error('Location not found');
  return data[0].woeid;
}

export async function fetchWeather(woeid) {
  const res = await fetch(`${BASE}location/${woeid}/`);
  const data = await res.json();
  const today = data.consolidated_weather && data.consolidated_weather[0];
  if (!today) throw new Error('Weather data not available');
  return {
    location: data.title,
    weather: today.weather_state_name,
    temperature: today.the_temp,
  };
}

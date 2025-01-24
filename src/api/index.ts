import axios, { AxiosError } from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
/**
 * Fetch current weather data by city name.
 * @param cityName - The name of the city
 * @returns Weather data as a JSON object
 */
export const getWeather = async (cityName: string) => {
  try {
    const response = axios.get(
      `${API_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    const data = (await response).data;
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error("City not found");
    } else {
      console.error("Error fetching weather data:", error);
    }
  }
};

export const getWeatherByCoordinates = async (
  latitude: number,
  longitude: number
) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

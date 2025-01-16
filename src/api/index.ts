/*
  URLS: WEATHER `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric` 
        FORECAST `${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
*/

import axios from "axios";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;
/**
 * Fetch current weather data by city name.
 * @param cityName - The name of the city
 * @returns Weather data as a JSON object
 */
export const getWeather = async (cityName: string): Promise<void> => {
  try {
    const response = axios.get(
      `${API_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    console.log("response --->", response);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

import { Header } from "../Header";
import { Search } from "../Search";
import { TodaysWeatherInfo } from "../TodaysWeatherInfo";
import { getWeather, getWeatherByCoordinates } from "../../api";
import { useEffect, useState } from "react";
import { formatTemp } from "../../utils";

interface IWeatherDataProps {
  weather: {
    main: string;
  }[];
  main: {
    temp: number;
  };
  name: string;
}

export const TodaysWeather = () => {
  const [weatherData, setWeatherData] = useState<IWeatherDataProps | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (input: string) => {
    try {
      setLoading(true);
      const data = await getWeather(input);
      console.log("data ->", data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Could not fetch weather data. Please try again");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchWeatherForCurrentLocation = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!navigator.geolocation) {
          throw new Error("Geolocation is not supported by this browser.");
        }

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const response = await getWeatherByCoordinates(latitude, longitude);
            setWeatherData(response);
          },
          () => {
            handleSearch("London");
          }
        );
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Could not fetch weather data. Defaulting to London");
        handleSearch("London");
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherForCurrentLocation();
  }, []);

  const formattedTemp = weatherData
    ? formatTemp(weatherData?.main.temp as number)
    : 0;
  return (
    <>
      {/* left */}
      <div className="w-1/3 bg-blue-100 p-4 flex flex-col text-center items-center">
        <Header />
        <Search onSearch={handleSearch} />
        {loading && (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            <p className="text-blue-500">Loading weather data...</p>
          </div>
        )}
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-md mt-4">
            <p>{error}</p>
          </div>
        )}
        <TodaysWeatherInfo
          temp={formattedTemp}
          main={(weatherData?.weather[0].main as string) || "N/A"}
          location={(weatherData?.name as string) || "Unknown"}
        />
      </div>
    </>
  );
};

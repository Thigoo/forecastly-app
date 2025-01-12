import { TodaysWeather } from "../components/TodaysWeather";
import { WeatherDetails } from "../components/WeatherDetails";

export const MainScreen = () => {
  return (
    <>
      <TodaysWeather />
      <WeatherDetails />
    </>
  );
};

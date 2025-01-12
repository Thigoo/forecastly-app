import { Header } from "../Header";
import { Search } from "../Search";
import { TodaysWeatherInfo } from "../TodaysWeatherInfo";

export const TodaysWeather = () => {
  return (
    <>
      {/* left */}
      <div className="w-1/3 bg-blue-100 p-4 flex flex-col text-center items-center">
        <Header />
        <Search />
        <TodaysWeatherInfo />
      </div>
    </>
  );
};

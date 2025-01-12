import { FaLocationDot } from "react-icons/fa6";
import { WiDaySunny } from "react-icons/wi";

export const TodaysWeatherInfo = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-red-500">
        <h2 className="text-2xl font-bold">today's weather</h2>
        <WiDaySunny size={200} className="text-yellow-500" />
      </div>
      <div className="bg-sky-300 w-full px-2 flex flex-col">
        <p className="text-6xl font-bold ">22°C</p>
        <p className="text-2xl font-bold">Sunny</p>
      </div>
      <div className="w-full bg-orange-700 p-2 flex flex-col justify-between">
        <p>Today: Sun, 12 Jan</p>
        <p className="flex items-center justify-center gap-2 bg-pink-400">
          <FaLocationDot />
          New York
        </p>
      </div>
    </>
  );
};

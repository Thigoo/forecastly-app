import moment from "moment";
import { FaLocationDot } from "react-icons/fa6";
import {
  WiCloud,
  WiDayCloudy,
  WiDayHaze,
  WiDaySunny,
  WiDust,
  WiFog,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";
import { formatDate } from "../../utils/Formatters/formatDate";

type IWeatherInfo = {
  temp: number;
  main: string;
  location: string;
};

const weatherIcons: { [key: string]: JSX.Element } = {
  Clear: <WiDaySunny size={200} className="text-yellow-500" />,
  Clouds: <WiDayCloudy size={200} className="text-gray-400" />,
  Rain: <WiRain size={200} className="text-blue-500" />,
  Snow: <WiSnow size={200} className="text-white" />,
  Thunderstorm: <WiThunderstorm size={200} className="text-purple-600" />,
  Drizzle: <WiRain size={200} className="text-light-blue-400" />,
  Mist: <WiFog size={200} className="text-gray-300" />,
  Smoke: <WiDust size={200} className="text-gray-400" />,
  Haze: <WiDayHaze size={200} className="text-yellow-300" />,
  Dust: <WiDust size={200} className="text-brown-500" />,
  Fog: <WiFog size={200} className="text-gray-300" />,
  Sand: <WiDust size={200} className="text-yellow-600" />,
  Ash: <WiDust size={200} className="text-gray-600" />,
  Squall: <WiCloud size={200} className="text-gray-400" />,
  Tornado: <WiThunderstorm size={200} className="text-red-500" />,
};
export const TodaysWeatherInfo = ({ temp, main, location }: IWeatherInfo) => {
  const today = moment();
  const formattedDate = formatDate(today);

  const weatherIcon = weatherIcons[main] || (
    <WiDaySunny size={200} className="text-yellow-500" />
  );
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-red-500">
        <h2 className="text-2xl font-bold">today's weather</h2>
        {/* <WiDaySunny size={200} className="text-yellow-500" /> */}
        {weatherIcon}
      </div>
      <div className="bg-sky-300 w-full px-2 flex flex-col">
        <p className="text-6xl font-bold ">{temp}°C</p>
        <p className="text-2xl font-bold">{main}</p>
      </div>
      <div className="w-full bg-orange-700 p-2 flex flex-col justify-between">
        <p>Today: {formattedDate}</p>
        <p className="flex items-center justify-center gap-2 bg-pink-400">
          <FaLocationDot />
          {location}
        </p>
      </div>
    </>
  );
};

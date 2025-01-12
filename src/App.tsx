import { WiBarometer, WiCloudy, WiDaySunny, WiHumidity } from "react-icons/wi";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";
import { MdVisibility } from "react-icons/md";

function App() {
  return (
    <div className="min-h-screen flex">
      {/* left */}
      <div className="w-1/3 bg-blue-100 p-4 flex flex-col text-center items-center">
        <div className="h-1/6 w-full flex justify-center items-center bg-orange-900">
          <h3 className="font-bold text-3xl">ForecastLy</h3>
        </div>
        <div className="bg-purple-400 flex  justify-between w-full p-2 m-3">
          <input
            type="text"
            placeholder="Search for place"
            className="bg-opacity-50 p-2 border-none outline-none rounded-lg w-full mr-2"
          />
          <button className="flex items-center gap-2 px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            <FaSearch />
            Search
          </button>
        </div>
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
      </div>

      {/* right */}
      <div className="w-2/3 bg-red-100 p-4 flex flex-col">
        {/* highlights */}
        <div className="bg-red-600 h-1/4 p-4 text-center flex flex-col justify-center w-full">
          <div>
            <h3>Today's Highlights</h3>
          </div>
          <div className="bg-pink-700 w-full flex flex-row justify-center gap-2 mt-2.5">
            <div className="border flex flex-col p-1 items-center w-1/5">
              <p>wind status</p>
              <p className="flex items-center gap-2">
                <FiWind />
                5km/h
              </p>
            </div>
            <div className="border flex flex-col p-1 items-center w-1/5">
              <p>humidity</p>
              <p className="flex items-center gap-2">
                <WiHumidity />
                82%
              </p>
              {/* <div className="flex text-sm w-full justify-between text-[9px] font-bold">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <input type="range" className="w-full" /> */}
            </div>
            <div className="border flex flex-col p-1 items-center w-1/5">
              <p>visibility</p>
              <p className="flex items-center gap-2">
                <MdVisibility />
                6,0miles
              </p>
            </div>
            <div className="border flex flex-col p-1 items-center w-1/5">
              <p>air pressure</p>
              <p className="flex items-center gap-2">
                <WiBarometer />
                1021mb
              </p>
            </div>
          </div>
        </div>
        {/* forecast */}
        <div className="bg-blue-950 h-1/3 p-4 flex flex-col justify-center items-center text-white">
          <div>
            <h3 className="text-2xl font-bold text-center">Forecast</h3>
          </div>
          <div className="w-full flex flex-row justify-center gap-2 bg-orange-400 m-3">
            <div className="border-solid border border-white flex flex-col items-center gap-2 w-1/6 p-2">
              <p>Tomorrow</p>
              <WiCloudy className="text-5xl bg-pink-950" />
              <div className="flex justify-between w-2/3 bg-green-600">
                <p>14°C</p>
                <p>7°C</p>
              </div>
            </div>
            <div className="border-solid border border-white flex flex-col items-center gap-2 w-1/6 p-2">
              <p>Tomorrow</p>
              <WiCloudy className="text-5xl bg-pink-950" />
              <div className="flex justify-between w-2/3 bg-green-600">
                <p>14°C</p>
                <p>7°C</p>
              </div>
            </div>
            <div className="border-solid border border-white flex flex-col items-center gap-2 w-1/6 p-2">
              <p>Tomorrow</p>
              <WiCloudy className="text-5xl bg-pink-950" />
              <div className="flex justify-between w-2/3 bg-green-600">
                <p>14°C</p>
                <p>7°C</p>
              </div>
            </div>
            <div className="border-solid border border-white flex flex-col items-center gap-2 w-1/6 p-2">
              <p>Tomorrow</p>
              <WiCloudy className="text-5xl bg-pink-950" />
              <div className="flex justify-between w-2/3 bg-green-600">
                <p>14°C</p>
                <p>7°C</p>
              </div>
            </div>
            <div className="border-solid border border-white flex flex-col items-center gap-2 w-1/6 p-2">
              <p>Tomorrow</p>
              <WiCloudy className="text-5xl bg-pink-950" />
              <div className="flex justify-between w-2/3 bg-green-600">
                <p>14°C</p>
                <p>7°C</p>
              </div>
            </div>
          </div>
        </div>
        {/* graph */}
        <div className="bg-green-600 h-1/2 p-4">
          <p>Graph</p>
        </div>
      </div>
    </div>
  );
}

export default App;

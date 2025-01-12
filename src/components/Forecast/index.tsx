import { WiCloudy } from "react-icons/wi";

export const Forecast = () => {
  return (
    <>
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
    </>
  );
};

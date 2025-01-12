import { Forecast } from "../Forecast";
import { Graph } from "../Graph";
import { Highlights } from "../Highlights";

export const WeatherDetails = () => {
  return (
    <>
      {/* right */}
      <div className="w-2/3 bg-red-100 p-4 flex flex-col">
        <Highlights />
        <Forecast />
        <Graph />
      </div>
    </>
  );
};

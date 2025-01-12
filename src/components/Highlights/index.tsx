import { FiWind } from "react-icons/fi";
import { MdVisibility } from "react-icons/md";
import { WiBarometer, WiHumidity } from "react-icons/wi";

export const Highlights = () => {
  return (
    <>
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
    </>
  );
};

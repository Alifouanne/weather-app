import weatherCodeToString from "@/lib/weatherCodeToString";
import { Card } from "@tremor/react";
import Image from "next/image";
import CityPicker from "./CityPicker";
import SunInfo from "./SunInfo";
type props = {
  city: string;
  long: string;
  lat: string;
  result: Root;
};
function InfoPanel({ city, long, lat, result }: props) {
  return (
    <div className="p-10 ">
      <div className="pb-5 ">
        <h1 className="mb-5 text-6xl font-bold textgradient">
          {decodeURI(city)}
        </h1>
        <p className="text-xs text-subtitle">
          Long/Lat : {long},{lat}
        </p>
      </div>
      <Card className="gradient">
        <CityPicker />
      </Card>

      <hr className="  my-10 mt-10 mb-5 border-t-[2px] border-violet-300" />
      <div className="flex items-center justify-between mb-10 space-x-10">
        <div>
          <p className="text-xl text-title">
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
              weekday: "long",
            })}
          </p>
          <p className="font-light text-subtitle">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className="text-xl uppercase text-title">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
      <hr className="  my-10 mt-10 mb-5 border-t-[2px] border-violet-300" />

      <div>
        {/* //?image */}
        <Image
          src={`https://www.weatherbit.io/static/img/icons/${
            weatherCodeToString[result.current_weather.weathercode].icon
          }.png`}
          alt={weatherCodeToString[result.current_weather.weathercode].label}
          width={75}
          height={75}
          quality={100}
        />
        <div className="flex items-center justify-between space-x-10">
          <p className="text-6xl font-semibold text-title">
            {result.current_weather.temperature.toFixed(1)}°C
          </p>
          <p className="text-lg text-right font-extralight text-title">
            {weatherCodeToString[result.current_weather.weathercode].label}
          </p>
        </div>
      </div>
      <div className="py-5 space-y-2">
        <SunInfo sun={true} time={result.daily.sunrise[0]} />
        <SunInfo sun={false} time={result.daily.sunset[0]} />
      </div>
    </div>
  );
}

export default InfoPanel;

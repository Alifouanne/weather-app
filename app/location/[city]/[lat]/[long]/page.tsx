import { getClient } from "@/apollo-client";
import CalloutC from "@/components/CalloutC";
import HumidityChart from "@/components/HumidityChart";
import InfoPanel from "@/components/InfoPanel";
import RainChart from "@/components/RainChart";
import StatC from "@/components/StatC";
import TempChart from "@/components/TempChart";
import fetchQuery from "@/graphql/queries/fetchQuery";
import type { Metadata } from "next";
export const revalidate = 60;
type props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

export function generateMetadata({ params: { city } }: props): Metadata {
  return {
    title: city,
  };
}
async function WeatherPage({ params: { city, lat, long } }: props) {
  const client = getClient();
  const { data } = await client.query({
    query: fetchQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });
  const result: Root = data.myQuery;

  return (
    <div className="flex flex-col min-h-screen md:flex-row ">
      {/* //? info panel */}
      <InfoPanel city={city} long={long} lat={lat} result={result} />
      <div className="flex-1 p-5 bg-backgroundMain lg:p-10 ">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold text-title">Today Overview</h2>
            <p className="text-sm text-subtitle">
              Last updated at: {""}
              {new Date(result.current_weather.time)
                .toUTCString()
                .slice(0, 17)}{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 m-2 xl:grid-cols-2 ">
            {/* //? stat cards */}
            <StatC
              title="Maximum Temperature"
              color="amber"
              metric={`${result.daily.temperature_2m_max[0].toFixed(1)}°`}
            />
            <StatC
              title="Minemum Temperature"
              color="emerald"
              metric={`${result.daily.temperature_2m_min[0].toFixed(1)}°`}
            />
            <div>
              <StatC
                color={result.daily.uv_index_max[0] > 5 ? "red" : "green"}
                title="UV Index"
                metric={result.daily.uv_index_max[0].toFixed(1)}
              />
              {Number(result.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutC
                  message="The UV is high today, be sure to wear SPF"
                  warning
                />
              )}
            </div>
            <div className="flex space-x-3">
              <StatC
                title="Wind Speed"
                color="indigo"
                metric={`${result.current_weather.windspeed.toFixed(1)} Km/h`}
              />
              <StatC
                title="Wind Direction"
                color="violet"
                metric={`${result.current_weather.winddirection.toFixed(1)}°`}
              />
            </div>
          </div>
        </div>
        <hr className=" border-t-[2px] border-violet-300 m-10 " />
        <div className="space-y-3">
          {/* //? Charts section */}
          <TempChart results={result} />
          <RainChart results={result} />
          <HumidityChart results={result} />
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;

import { MoonIcon, SunIcon } from "@heroicons/react/solid";
type props = {
  sun: boolean;
  time: string;
};
function SunInfo({ sun, time }: props) {
  return (
    <div className="flex items-center px-4 py-3 space-x-2 border rounded-md shadow-md gradient shadow-indigo-500-500/40">
      {sun ? (
        <SunIcon className="w-10 h-10 text-violet-200" />
      ) : (
        <MoonIcon className="w-10 h-10 text-violet-200" />
      )}
      <div className="flex items-center justify-between flex-1">
        <p className="font-extralight text-violet-200">
          {sun ? "Sunrise" : "Sunset"}
        </p>
        <p className="text-2xl uppercase text-violet-200">
          {new Date(time).toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
    </div>
  );
}

export default SunInfo;

import { SunIcon } from "@heroicons/react/solid";
function loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundMain">
      <SunIcon className="w-24 h-24 text-violet-300 animate-bounce" />
      <h1 className="mb-10 text-6xl font-bold text-center animate-pulse textgradient">
        Loading City Weather Informations
      </h1>
      <h2 className="mb-10 text-xl font-bold text-center text-subtitle">
        Thank you for your patience! Your weather forecast is on its way,
        tailored specifically to your city. We appreciate your trust in our
        advanced weather services and hope to make your experience with us a
        delightful one.
      </h2>
    </div>
  );
}

export default loading;

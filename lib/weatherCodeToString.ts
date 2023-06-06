const weatherCodeToString: {
  [key: number]: {
    icon: string;
    label: string;
  };
} = {
  0: { icon: "c01d", label: "Clear sky" },
  1: { icon: "c02d", label: "Mainly clear" },
  2: { icon: "c03d", label: "Partly cloudy" },
  3: { icon: "c04d", label: "Overcast" },
  45: { icon: "s05d", label: "Fog" },
  48: { icon: "s05d", label: "Depositing rime fog" },
  51: { icon: "d01d", label: "Light drizzle" },
  53: { icon: "d01d", label: "Moderate drizzle" },
  55: { icon: "d01d", label: "Dense drizzle" },
  56: { icon: "d01d", label: "Light freezing drizzle" },
  57: { icon: "d01d", label: "Dense freezing drizzle" },
  61: { icon: "r01d", label: "Slight rain" },
  63: { icon: "r01d", label: "Moderate rain" },
  65: { icon: "r01d", label: "Heavy rain" },
  66: { icon: "f01d", label: "Light freezing rain" },
  67: { icon: "f01d", label: "Heavy freezing rain" },
  71: { icon: "s02d", label: "Slight snow fall" },
  73: { icon: "s02d", label: "Moderate snow fall" },
  75: { icon: "s02d", label: "Heavy snow fall" },
  77: { icon: "s02d", label: "Snow grains" },
  80: { icon: "r02d", label: "Slight rain showers" },
  81: { icon: "r02d", label: "Moderate rain showers" },
  82: { icon: "r02d", label: "Violent rain showers" },
  85: { icon: "s01d", label: "Slight snow showers" },
  86: { icon: "s01d", label: "Heavy snow showers" },
  95: { icon: "t04d", label: "thunderstorm" },
  96: { icon: "t04d", label: "thunderstorm with Slight hail" },
  99: { icon: "t04d", label: "thunderstorm with Heavy hail" },
};
export default weatherCodeToString;

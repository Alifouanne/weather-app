"use client";
// cSpell:disable
import { GlobeIcon } from "@heroicons/react/solid";
import { City, Country } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;
type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;
const options = Country.getAllCountries()
  .filter((country) => country.isoCode !== "US")
  .map((country) => ({
    value: {
      latitude: country.latitude,
      longitude: country.longitude,
      isoCode: country.isoCode,
    },
    label: country.name,
  }));

function CityPicker() {
  const [SelectedCountry, setSelectedCountry] = useState<option>(null);
  const [SelectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();
  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };
  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option);
    router.push(
      `/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-backgroundMain">
          <GlobeIcon className="w-5 h-5 text-backgroundMain" />
          <label htmlFor="country">Country</label>
        </div>

        <Select
          options={options}
          value={SelectedCountry}
          onChange={handleSelectedCountry}
          className="text-subtitl "
        />
      </div>
      {SelectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-backgroundMain">
            <GlobeIcon className="w-5 h-5 text-backgroundMain" />
            <label htmlFor="country">City</label>
          </div>
          <Select
            options={City.getCitiesOfCountry(
              SelectedCountry.value.isoCode
            )?.map((city) => ({
              value: {
                latitude: city.latitude!,
                longitude: city.longitude!,
                countryCode: city.countryCode,
                name: city.name,
                stateCode: city.stateCode,
              },
              label: city.name,
            }))}
            value={SelectedCity}
            onChange={handleSelectedCity}
            className="text-subtitl "
          />
        </div>
      )}
    </div>
  );
}

export default CityPicker;

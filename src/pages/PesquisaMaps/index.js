import React, { useEffect, useState } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const [InitialPosition ,setInitialPosition] = useState<[number, number]>([0, 0]);

const PlacesAutoComplete = ({ onGetLatLng }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    })
  }, [])
  
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (val) => {
    clearSuggestions()
    const results = await geocodeByAddress(val);
    const latLng = await getLatLng(results[0]);
    setValue(val, false);
    onGetLatLng([latLng, results[0].address_components]);
    setCoordinates(latLng);

    console.log(results);
  };
  return (
    <Combobox onSelect={handleSelect} aria-labelledby="demo">
      <ComboboxInput value={value} onChange={handleInput} disabled={!ready} className="inputEnd" query={{
        language:'pt-br',
        location: `${InitialPosition}`,
        radius: '150000',
        components: 'country:mx',
        strinctbounds: true,
      }} />
      <ComboboxPopover>
        <ComboboxList>

          {status === "OK" &&
            data.map(({ id, description }) => (
              <>
                <ComboboxOption key={id} value={description} style={{ paddingTop: 20, paddingBottom: 20 }} >
                  📍" <ComboboxOptionText />
                </ComboboxOption>

              </>
            ))}

        </ComboboxList>
      </ComboboxPopover>
      <li className="logoGoogle">
        <img
          src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
          alt="Powered by Google"
        />
      </li>
    </Combobox>
  );
};

export default PlacesAutoComplete;
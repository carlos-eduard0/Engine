import React from "react";
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
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const PlacesAutoComplete = ({ onGetLatLng }) => {
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
      <ComboboxInput value={value} onChange={handleInput} disabled={!ready} className="inputEnd" />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} style={{ paddingTop: 20, paddingBottom: 20 }}>

              </ComboboxOption>
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
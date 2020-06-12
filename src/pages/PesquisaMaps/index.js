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

const PlacesAutoComplete = ( latLng, results) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (val) => {
    const results = await geocodeByAddress(val);
    const latLng = await getLatLng(results[0]);
    setValue(val, false);
    setCoordinates(latLng);

    console.log(coordinates, results);
  };

  return (
    <Combobox onSelect={handleSelect} aria-labelledby="demo">
      <ComboboxInput value={value} onChange={handleInput} disabled={!ready} />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default PlacesAutoComplete;
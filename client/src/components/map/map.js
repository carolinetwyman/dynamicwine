import React, {useState} from "react";
import "./map.css";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import mapStyles from "./mapStyles";

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const apiKey =
  "https://maps.googleapis.com/maps/api/js?key=" +
  process.env.REACT_APP_GOOGLE_MAPS_API_KEY +
  "&v=3.exp&libraries=geometry,drawing,places";

export default function Map() {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  Geocode.setLanguage("en");

  const wineList = []

  wineList.map((wine) => {
    Geocode.fromAddress(wine.address).then(
      (response) => {
        // const { lat, lng } = response.results[0].geometry.location;
        wine.coords = response.results[0].geometry.location;
        return wine;
      },
      (error) => {
        console.error(error);
      }
    );
  });
  console.log(wineList);

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        className="map"
        defaultZoom={3}
        defaultCenter={{ lat: 0, lng: 0 }}
        options={options}
      >
        {wineList.map((wine) => {
          return (
            <Marker position={wine.coords}>
              <InfoWindow>
                <div>
                  {wine.name} {wine.vintage}
                </div>
              </InfoWindow>
            </Marker>
          );
        })}
      </GoogleMap>
    ))
  );

  return (
    <MapWithAMarker
      googleMapURL={apiKey}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `545px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}




// For Reference/////////////////
import React from 'react';
import "./map.css";
import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
import Geocode from "react-geocode";

const apiKey = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAPS_API_KEY +'&v=3.exp&libraries=geometry,drawing,places';

export default function Map() {

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

      const wineList = [
        {name: "Menti", vintage: 2018, coords: {lat: 45.4598, lng: 11.3401}},
        {name: "Raventos i Blanc", vintage: 2017, coords: { lat: 41.4263208, lng: 1.7845831 }},
        {name: "Mico Mariotti", vintage: "NV", coords: { lat: 44.6596655, lng: 11.7785897 }},
        {name: "Ameztoi", vintage: 2019, coords: { lat: 43.2938, lng: -2.1983 }},
        {name: "Domain Mercouri", vintage: 2017, coords: { lat: 37.75, lng: 21.58333 }}
      ];

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap className= "map"
              defaultZoom={3}
              defaultCenter={{ lat: 0, lng: 0 }}
            >
            {
              wineList.map(wine => {
               return (
                <Marker position={wine.coords}>
                    <InfoWindow>
                      <div>{wine.name} {wine.vintage}</div>
                    </InfoWindow>
                  </Marker>
               )}
           
         )}
            </GoogleMap>
          ));

        return(

          <MapWithAMarker
                googleMapURL= {apiKey}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `500px`}} />}
                mapElement={<div style={{ height: `100%` }} />}
                />

        );

}

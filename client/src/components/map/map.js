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
// import REACT_APP_GOOGLE_MAPS_API_KEY from "../../.env.local";

Geocode.setApiKey("AIzaSyDZpId9vU-4E_1JioDeZ1IV58nOK5ygtZE&v")

export default class Map extends React.Component {

    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap className= "map"
              defaultZoom={3}
              defaultCenter={{ lat: 0, lng: 0 }}
            >
              <Marker position={{ lat: 45.4598, lng: 11.3401 }}> 
                <InfoWindow> 
                 <div> Menti 2018</div>
                </InfoWindow>
              </Marker>
              <Marker position={{ lat: 41.4263208, lng: 1.7845831 }}>
               <InfoWindow>
                  <div>Raventos Blanc 2017</div>
                </InfoWindow>
              </Marker>
              <Marker position={{ lat: 44.6596655, lng: 11.7785897 }}>
                <InfoWindow>
                  <div>Mico Mariotti NV</div>
                </InfoWindow>
              </Marker>
              <Marker position={{ lat: 43.2938, lng: -2.1983 }}>
                <InfoWindow>
                  <div>Ameztoi 2019</div> 
                </InfoWindow>
              </Marker>
              <Marker position={{ lat: 37.75, lng: 21.58333 }}>
                <InfoWindow>
                  <div>Domaine Mercouri</div>
                </InfoWindow>
              </Marker>

            </GoogleMap>
          ));

        return(
           <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZpId9vU-4E_1JioDeZ1IV58nOK5ygtZE&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `500px`}} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
        );
    }

}

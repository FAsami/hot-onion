import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '60%',
};

function GoogleMap(props) {
  return (
    <Map
      google={props.google}
      zoom={12}
      style={mapStyles}
      initialCenter={{
        lat: 23.777176,
        lng: 90.399452,
      }}>
      <Marker position={{ lat: 23.777176, lng: 90.399452 }} />
    </Map>
  );
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyC69fb5gYqkHysLxtGYDeEtLe5E87sqJGs',
})(GoogleMap);

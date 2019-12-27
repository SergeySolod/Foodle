import React, {useState} from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";
import {NavLink} from "react-router-dom";

const Map = (props) => {
    const [selectedRest, setSelectedRest] = useState(null)
    return (
        <GoogleMap
            defaultZoom={props.Zoom}
            defaultCenter={{lat: props.latlong.lat, lng: props.latlong.long}}
            defaultOptions={{styles: mapStyles}}
        >
            {
                props.restaurants.map((restaurants) => (

                    <Marker key={restaurants.id}
                            position={{
                                lat: restaurants.lat,
                                lng: restaurants.long
                            }}
                            onClick={() => {
                                setSelectedRest(restaurants);
                            }}
                    />
                ))}
            {selectedRest && (
                <InfoWindow
                    position={{
                        lat: selectedRest.lat,
                        lng: selectedRest.long
                    }}
                    onCloseClick={() => {
                        setSelectedRest(null)
                    }}
                >
                    <div>
                        <h5>{selectedRest.name}</h5>
                        <p>{selectedRest.address}</p>
                        <NavLink to={`/change/${props.cityId}/${selectedRest.id}`}
                                 className="btn btn-info">Выбрать ресторан</NavLink>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default MapWrapped
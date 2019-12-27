import React, {useEffect} from "react";
import {withRouter, NavLink} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestRestaurants} from "../../redux/reducers/restaurants-reducer";
import {getLatLong, getRestaurants} from "../../redux/selectors/restaurants-selector";
import Preloader from "../../components/preloader";
import MapWrapped from "./map";

const MapFromCity = (props) => {
    useEffect(() => {
        let cityId = props.match.params.cityId;
        props.requestRestaurants(cityId);
    }, []);
    if (!props.latlong) {
        return <Preloader/>
    }
    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=YOUR_API_KEY`}
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `100%`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
                restaurants={props.restaurants}
                latlong={props.latlong}
                restaurant={props.restaurant}
                Zoom={11}
                cityId={props.match.params.cityId}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return (
        {
            restaurants: getRestaurants(state),
            latlong: getLatLong(state),
        }
    )
}


export default compose(
    connect(mapStateToProps, {requestRestaurants}),
    withRouter)(MapFromCity)

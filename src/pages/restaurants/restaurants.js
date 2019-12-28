import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from "react-router-dom";
import {compose} from "redux";

import {requestRestaurants, setSearchRest} from "../../redux/reducers/restaurants-reducer";
import {getIsFetching, getSearchRest} from "../../redux/selectors/restaurants-selector";
import Preloader from "../../components/preloader";
import SidebarRest from "../../components/sidebars/sidebarRest";

const Restaurants = (props) => {
    useEffect(() => {
        let cityId = props.match.params.cityId;
        props.requestRestaurants(cityId);
    }, []);

    return (
        <div className='view-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <SidebarRest cityId={props.match.params.cityId} searchQuery={props.search} setSearchQuery={props.setSearchRest}/>
                    </div>
                            {props.isFetching ? <Preloader/> : null}
                        <div className='col-md-9'>
                            <div className="row">
                                {
                                    props.restaurants.map(restaurants => <div
                                        className='col-sm-4 col-lg-4 col-md-4 book-list pb-3'
                                        key={restaurants.id}>
                                        <div className="thumbnail">
                                            <div className="card">
                                                <img
                                                    src={restaurants.image.replace("http://foodle-storage.xxx", "https://storage.foodle.su") || "http://foodle.sergeysolod.ru/images/photorest.jpg"}
                                                    className="img-thumbnail card-img-top" alt="Фотография"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{restaurants.name}</h5>
                                                    <p className='itemButton'>
                                                        <NavLink
                                                            to={`/change/${props.match.params.cityId}/${restaurants.id}`}
                                                            className="btn btn-info">Выбрать ресторан</NavLink>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

const filterRest = (restaurants, search) => {
    return restaurants.filter(
        o => o.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
};

const searchCategory = (restaurants, search) => {
    return filterRest(restaurants, search)
};

let mapStateToProps = (state) => {
    return (
        {
            restaurants: searchCategory(state.restaurants.restaurants, state.restaurants.search),
            isFetching: getIsFetching(state),
            search: getSearchRest(state)
        }
    )
}

export default compose(
    connect(mapStateToProps, {requestRestaurants, setSearchRest}),
    withRouter
)(Restaurants);
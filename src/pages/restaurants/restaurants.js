import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from "react-router-dom";
import {compose} from "redux";

import {requestRestaurants} from "../../redux/reducers/restaurants-reducer";
import {getRestaurants, getIsFetching} from "../../redux/selectors/restaurants-selector";
import Preloader from "../../components/preloader";

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
                        Сайдбар
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

let mapStateToProps = (state) => {
    return (
        {
            restaurants: getRestaurants(state),
            isFetching: getIsFetching(state)
        }
    )
}

export default compose(
    connect(mapStateToProps, {requestRestaurants}),
    withRouter
)(Restaurants);
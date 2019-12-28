import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from "react-router-dom";
import {compose} from "redux";

import {requestRestaurant} from "../../redux/reducers/restaurant-reducer";
import Preloader from "../../components/preloader";
import {getRestaurant, getCategories, getFirstCategory} from "../../redux/selectors/restaurant-selector";

const Restaurant = (props) => {
    useEffect(() => {
        let restaurantId = props.match.params.restaurantId;
        props.requestRestaurant(restaurantId);
    }, []);

    if (!props.categories) {
        return <Preloader/>
    }
    console.log(props.categories[0].id)
    return (
        <div>

            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            src={props.restaurant.avatar.replace("http://foodle-storage.xxx", "https://storage.foodle.su") || "http://foodle.sergeysolod.ru/images/bigrestphoto.jpg"}
                            className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.restaurant.name}</h5>
                            <p className="card-text">{props.restaurant.description}</p>
                            <p className="card-text"><b>Адресс заведения:</b> {props.restaurant.address}</p>
                            <p className="card-text">
                                <small className="text-muted">{props.restaurant.status_text}</small>
                                <br/>
                                <small className="text-muted">Начало работы: {props.restaurant.start_time}</small>
                                <br/>
                                <small className="text-muted">Окончание работы: {props.restaurant.finish_time}</small>
                                <br/>
                                <small className="text-muted">Рейтинг: {props.restaurant.rating}</small>
                                <p className='pt-2'>
                                    <NavLink to={`/map/${props.match.params.cityId}/${props.match.params.restaurantId}`}
                                             className="btn btn-info">Посмотреть на карте</NavLink>
                                    <NavLink
                                        to={`/change/${props.match.params.cityId}/${props.match.params.restaurantId}/${props.categories[0].id}`}
                                        className="btn btn-success">Посмотреть меню</NavLink>
                                    <NavLink
                                        to={`/change/${props.match.params.cityId}`}
                                        className="btn btn-outline-light ">Назад к ресторанам</NavLink>
                                </p>
                            </p>
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
            restaurant: getRestaurant(state),
            categories: getCategories(state),
            firstCategory: getFirstCategory(state)
        }
    )
}

export default compose(
    connect(mapStateToProps, {requestRestaurant}),
    withRouter
)(Restaurant);
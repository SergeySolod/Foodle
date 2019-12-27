import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from "react-router-dom";
import {compose} from "redux";

import {requestCities} from "../../redux/reducers/cities-reducer";
import {getCities, getIsFetching} from "../../redux/selectors/cities-selector";
import Preloader from "../../components/preloader";

const Cities = (props) => {
    useEffect(() => {
        props.requestCities();
    }, []);

    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            <div className="row">
                {
                    props.cities.map(cities => <div className='col-sm-3 col-lg-3 col-md-3 book-list pb-3'
                                                    key={cities.id}>
                        <div className="thumbnail">
                            <div className="card">
                                <img src={cities.image}
                                     className="img-thumbnail card-img-top" alt="Фото Города"/>
                                <div className="card-body">
                                    <h5 className="card-title">{cities.name}</h5>
                                    <p className='itemButton'>
                                        <NavLink to={`/change/${cities.id}`}
                                                 className="btn btn-primary">Выбрать</NavLink>
                                        <NavLink to={`/map/${cities.id}`}
                                                 className="btn btn-success">На карту</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return (
        {
            cities: getCities(state),
            isFetching: getIsFetching(state)
        }
    )
}

export default compose(
    connect(mapStateToProps, {requestCities}),
    withRouter
)(Cities);
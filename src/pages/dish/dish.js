import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import {compose} from "redux";


const Dish = (props) => {
    useEffect(() => {

    }, []);

    return (
        <div className="alert alert-primary" role="alert">
          Страница конкретного блюда находится в разработке
        </div>
    )
}

let mapStateToProps = (state) => {
    return (
        {

        }
    )
}

export default compose(
    connect(mapStateToProps, null),
    withRouter
)(Dish);
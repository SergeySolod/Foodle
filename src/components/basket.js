import React from 'react'
import {connect} from 'react-redux'
import {getBasket, getCount, getValue} from "../redux/selectors/basket-selector";

const Basket = (props) => {
    return (
        <div>
            Корзина ({props.addedValue} руб/{props.addedCount} блюд)
        </div>
    )
}

let mapStateToProps = (state) => {
    return (
        {
            basket: getBasket(state),
            addedCount: getCount(state),
            addedValue: getValue(state),

        }
    )
}

export default connect(mapStateToProps, null)(Basket)
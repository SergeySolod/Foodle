import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import {basketCheckout, deleteInBasketAll} from "../../redux/reducers/basket-reducer";
import {getBasket} from "../../redux/selectors/basket-selector";


const SidebarBasket = (props) => {
    return (
        <div>
            <button onClick={() => {
                props.deleteInBasketAll()
            }}
                className="btn btn-danger btn btn-block">Удалить всё
            </button>
            <button onClick={() => {
                props.basketCheckout(props.basket)
            }}
                    className="btn btn-success btn btn-block">Оплатить содержимое
            </button>
        </div>
    )
}

let mapStateToProps = (state) => {
    return (
        {
            basket: getBasket(state)
        }
    )
}

export default connect(mapStateToProps, {deleteInBasketAll, basketCheckout})(SidebarBasket);
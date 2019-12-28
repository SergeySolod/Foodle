import React from 'react'
import {NavLink} from "react-router-dom";

const VoidBasket = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Корзина пуста =(</h1>
            <p className="lead">Закажите что-нибудь или просто посмотрите информацию о ресторанах, полюбуйтесь тысячами блюд, мы старались ради Вас, понажимайте на все кнопочки, посмотрите карту, наполните корзину и купите себе вкусняшку. </p>
            <hr className="my-4"/>
                <p>Сначала выбираете Ваш город, потом интересующий ресторан и любые из сотен блюд в нём, это также можно сделать через карту.</p>
                <NavLink className="btn btn-primary btn-lg" to="/change" exact>К списку городов</NavLink>
        </div>
    )
}

export default VoidBasket
import React from 'react'
import {connect} from 'react-redux'
import {getBasket} from "../../redux/selectors/basket-selector";
import {deleteInBasket} from "../../redux/reducers/basket-reducer";
import VoidBasket from "../../components/voidBasket";
import SidebarBasket from "../../components/sidebars/sidebarBasket";

const Basket = (props) => {
    return (
        <div className='view-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                       <SidebarBasket/>
                    </div>
                    <div className='col-md-9'>
                        <div className="row">
                            {(props.basket.length == 0) && <VoidBasket/>}

                            {
                                props.basket.map(basket => <div
                                    className='col-sm-4 col-lg-4 col-md-4 pb-3 book-list'
                                    key={basket.id}>
                                    <div className="thumbnail">
                                        <div className="card">
                                            <img
                                                src={basket.image.replace("http://foodle-storage.xxx", "https://storage.foodle.su") || "http://foodle.sergeysolod.ru/images/photoeat.jpg"}
                                                className="img-thumbnail card-img-top" alt="Фотография"/>
                                            <div className="card-body">
                                                <h6 className="card-title">{basket.name}</h6>
                                                <h6 className="card-title">{basket.price.value} {basket.price.currency}</h6>
                                                <p className='itemButton'>
                                                    <button onClick={() => {
                                                        props.deleteInBasket(basket.id)
                                                    }} className="btn btn-info">Удалить
                                                    </button>
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
            basket: getBasket(state)
        }
    )
}

export default connect(mapStateToProps, {deleteInBasket})(Basket);
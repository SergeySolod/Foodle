import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from "react-router-dom";
import {compose} from "redux";

import Preloader from "../../components/preloader";
import {requestCategory, setFilter, setSearch} from "../../redux/reducers/category-reducer";
import {onAddInBasket} from "../../redux/reducers/basket-reducer";
import {getCategories} from "../../redux/selectors/restaurant-selector";
import {requestRestaurant} from "../../redux/reducers/restaurant-reducer";
import Sidebar from "../../components/sidebar";
import Sorting from "../../components/sorting";
import orderBy from 'lodash/orderBy.js';

class Category extends React.Component {
    componentDidMount() {
        let restaurantId = this.props.match.params.restaurantId;
        let categoryId = this.props.match.params.categoryId;
        this.props.requestRestaurant(restaurantId);
        this.props.requestCategory(restaurantId, categoryId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.categoryId != prevProps.match.params.categoryId) {
            let categoryId = this.props.match.params.categoryId;
            let restaurantId = this.props.match.params.restaurantId;
            this.props.requestCategory(restaurantId, categoryId);
        }
    }


    render() {
        if (!this.props.categories) {
            return <Preloader/>
        }
        const changeSort = (Filter) => {
            this.props.setFilter(Filter)
        };

        return (
            <div>
                <div className='view-container'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <Sidebar group={this.props.categories} setSearchQuery={this.props.setSearch}
                                         SearchQuery={this.props.search} cityId={this.props.match.params.cityId}
                                         restaurantId={this.props.match.params.restaurantId}/>
                            </div>
                            <div className='col-md-9'>
                                <Sorting changeSort={changeSort}/>
                                <div className="row">
                                    {(this.props.category.length == 0) ? <Preloader/> : null}
                                    {
                                        this.props.category.map(category => <div
                                            className='col-sm-4 col-lg-4 col-md-4 pb-3 book-list'
                                            key={category.id}>
                                            <div className="thumbnail">
                                                <div className="card">
                                                    <img
                                                        src={category.image.replace("http://foodle-storage.xxx", "https://storage.foodle.su") || "http://foodle.sergeysolod.ru/images/photoeat.jpg"}
                                                        className="img-thumbnail card-img-top" alt="Фотография"/>
                                                    <div className="card-body">
                                                        <h6 className="card-title">{category.name}</h6>
                                                        <h6 className="card-title">{category.price.value} {category.price.currency}</h6>
                                                        <p className='itemButton'>
                                                            <button  onClick={() => {
                                                                this.props.onAddInBasket(category)
                                                            }} className="btn btn-info">Добавить в
                                                                корзину
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
            </div>
        )
    }
}

const sortBy = (category, filter) => {
    switch (filter) {
        case 'priseHigh':
            return orderBy(category, 'price.value', 'desc');
        case 'priseLow':
            return orderBy(category, 'price.value', 'asc');
        case 'alfUp':
            return orderBy(category, 'name', 'asc');
        case 'alfDown':
            return orderBy(category, 'name', 'desc');
        default:
            return category;
    }
};

const filterCategory = (category, search) => {
    return category.filter(
        o => o.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
};

const searchCategory = (category, filter, search) => {
    return sortBy(filterCategory(category, search), filter)
};

let mapStateToProps = (state) => {
    return (
        {
            category: searchCategory(
                state.category.category,
                state.category.filter,
                state.category.search),
            categories: getCategories(state),
            search: state.category.search,
        }
    )
}

export default compose(
    connect(mapStateToProps, {requestCategory, requestRestaurant, setFilter, setSearch, onAddInBasket}),
    withRouter
)(Category);
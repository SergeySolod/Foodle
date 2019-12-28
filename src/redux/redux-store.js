import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

import citiesReducer from './reducers/cities-reducer'
import restaurantsReducer from './reducers/restaurants-reducer'
import restaurantReducer from './reducers/restaurant-reducer'
import categoryReducer from './reducers/category-reducer'
import basketReducer from './reducers/basket-reducer'

let reducers = combineReducers({
    cities: citiesReducer,
    restaurants: restaurantsReducer,
    restaurant: restaurantReducer,
    category: categoryReducer,
    basket: basketReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
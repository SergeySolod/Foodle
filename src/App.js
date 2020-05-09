import React from 'react';
import {Route, Switch} from 'react-router-dom'

import {Home} from './pages/home'
import {Navbar} from './components/navbar'
import Cities from './pages/cities/cities'
import Restaurants from './pages/restaurants/restaurants'
import Restaurant from './pages/restaurant/restaurant'
import Category from './pages/category/category'
import Dish from './pages/dish/dish'
import MapFromRest from './pages/map/mapFromRest'
import MapFromCity from './pages/map/mapFromCity'
import Basket from "./pages/basket/basket";

const App = () =>   {
        return (
            <div>
                <Navbar/>
                <Route path='/map/:cityId/:restaurantId' exact render={() => <MapFromRest/>}/>
                <Route path='/map/:cityId' exact render={() => <MapFromCity/>}/>
                <div className="container pt-4">
                    <Switch>
                        <Route path='/' exact render={() => <Home/>}/>
                        <Route path='/basket' exact render={() => <Basket/>}/>
                        <Route path='/change' exact render={() => <Cities/>}/>
                        <Route path='/change/:cityId' exact render={() => <Restaurants/>}/>
                        <Route path='/change/:cityId/:restaurantId' exact render={() => <Restaurant/>}/>
                        <Route path='/change/:cityId/:restaurantId/:categoryId' exact render={() => <Category/>}/>
                        <Route path='/change/:cityId/:restaurantId/:categoryId/:dishId' exact render={() => <Dish/>}/>
                    </Switch>
                </div>
            </div>
        );
}


export default App
import * as axios from 'axios'

export const foodleAPI = {
    getCities() {
        return axios({
            url: '  http://www.mocky.io/v2/5df7e285320000ef612e02ae',
            method: 'get',
        }).then(response => {
            return response.data;
        });
    },
    getRestautants(citiesId) {
        return axios({
            url: 'https://api.foodledev.ru/v2/restaurants?per-page=30&page=1',
            method: 'get',
            headers: {
                'CityId': citiesId
            }

        }).then(response => {
            return response.data;
        });
    },
    getRestaurant(restaurantId) {
        return axios({
            url: `https://api.foodledev.ru/v2/restaurants/${restaurantId}`,
            method: 'get',
        }).then(response => {
            return response.data;
        });
    },
    getCategory(restaurantId, categoryId) {
        return axios({
            url: `https://api.foodledev.ru/v2/products?restaurant_id=${restaurantId}&category_id=${categoryId}&q=&per-page=1000&page=1`,
            method: 'get',
        }).then(response => {
            return response.data;
        });
    },
}
import {foodleAPI} from '../../api/Api';

const SET_MENU = 'foodle/restaurant-reducer/SET_MENU';
const DELETE_RESTAURANT = 'foodle/restaurant-reducer/DELETE_RESTAURANT';

let initialState = {
    restaurant: []
}

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU: {
            return {...state, restaurant: action.restaurant}
        }
        case DELETE_RESTAURANT: {
            return {...state, restaurant: []}
        }
        default:
            return state;
    }
}

const setRestaurant = (restaurant) => ({type: SET_MENU, restaurant});
const deleteRestaurant = () => ({type: DELETE_RESTAURANT});



export const requestRestaurant = (restaurantId) => {
    return async (dispatch) => {
        dispatch(deleteRestaurant());
        let data = await foodleAPI.getRestaurant(restaurantId);
        dispatch(setRestaurant(data.data));
    }
}

export default restaurantReducer
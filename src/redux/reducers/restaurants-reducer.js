import {foodleAPI} from '../../api/Api';

const SET_RESTAURANTS = 'foodle/restaurants-reducer/SET_RESTAURANTS';
const TOGGLE_IS_FETCHING_USERS = 'foodle/restaurants-reducer/TOGGLE_IS_FETCHING_USERS';
const DELETE_RESTAURANTS = 'foodle/restaurants-reducer/DELETE_RESTAURANTS';
const SET_SEARCH = 'foodle/restaurants-reducer/SET_SEARCH';

let initialState = {
    restaurants: [],
    isFetching: true,
    search: ' '
}

const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESTAURANTS: {
            return {...state, restaurants: action.restaurants}
        }
        case DELETE_RESTAURANTS: {
            return {...state, restaurants: []}
        }
        case TOGGLE_IS_FETCHING_USERS: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_SEARCH: {
            return {...state, search: action.search}
        }
        default:
            return state;
    }
}

const setRestaurants = (restaurants) => ({type: SET_RESTAURANTS, restaurants});
const deleteRestaurants = () => ({type: DELETE_RESTAURANTS});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING_USERS, isFetching});
export const setSearchRest = (search) => ({type: SET_SEARCH, search});

export const requestRestaurants = (citiesId) => {
    return async (dispatch) => {
        dispatch(deleteRestaurants());
        dispatch(toggleIsFetching(true));
        let data = await foodleAPI.getRestautants(citiesId);
        dispatch(toggleIsFetching(false));
        dispatch(setRestaurants(data.data));
    }
}

export default restaurantsReducer
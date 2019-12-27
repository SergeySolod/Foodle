import {foodleAPI} from '../../api/Api';

const SET_CITIES = 'foodle/cities-reducer/SET_CITIES';
const TOGGLE_IS_FETCHING_USERS = 'foodle/cities-reducer/TOGGLE_IS_FETCHING_USERS';

let initialState = {
    cities: [],
    isFetching: true,
}

const restaurantsCities = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITIES: {
            return {...state, cities: action.cities}
        }
        case TOGGLE_IS_FETCHING_USERS: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

const setCities = (cities) => ({type: SET_CITIES, cities});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING_USERS, isFetching});


export const requestCities = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await foodleAPI.getCities();
        dispatch(toggleIsFetching(false));
        dispatch(setCities(data.data));

    }
}

export default restaurantsCities
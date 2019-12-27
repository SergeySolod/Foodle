import {foodleAPI} from '../../api/Api';

const SET_CATEGORY = 'foodle/category-reducer/SET_CATEGORY';
const DELETE_CATEGORY = 'foodle/category-reducer/DELETE_CATEGORY';
const SET_FILTER = 'foodle/category-reducer/SET_FILTER';
const SET_SEARCH = 'foodle/category-reducer/SET_SEARCH';

let initialState = {
    category: [],
    filter: 'all',
    search: ' '
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY: {
            return {...state, category: action.category}
        }
        case DELETE_CATEGORY: {
            return {...state, category: []}
        }
        case SET_FILTER: {
            return {...state, filter: action.filter}
        }
        case SET_SEARCH: {
            return {...state, search: action.search}
        }
        default:
            return state;
    }
}

const setCategory = (category) => ({type: SET_CATEGORY, category});
const deleteCategory = () => ({type: DELETE_CATEGORY});
export const setFilter = (filter) => ({type: SET_FILTER, filter});
export const setSearch = (search) => ({type: SET_SEARCH, search});

export const requestCategory = (restaurantId, categoryId) => {
    return async (dispatch) => {
        dispatch(deleteCategory());
        let data = await foodleAPI.getCategory(restaurantId, categoryId);
        dispatch(setCategory(data.data));
    }
}

export default categoryReducer
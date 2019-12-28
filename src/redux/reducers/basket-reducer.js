const ADD_BASKET = 'foodle/basket-reducer/ADD_BASKET';
const REMOVE_BASKET = 'foodle/basket-reducer/REMOVE_BASKET';

let initialState = {
    basket: []
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET: {
            return {...state, basket: [...state.basket, action.basket]}
        }
        case REMOVE_BASKET: {
            return {...state, basket: state.basket.filter(o => o.id != action.basket)}
        }
        default:
            return state;
    }
}

export const onAddInBasket = (basket) => ({type: ADD_BASKET, basket});
export const deleteInBasket = (basket) => ({type: REMOVE_BASKET, basket});

export default categoryReducer
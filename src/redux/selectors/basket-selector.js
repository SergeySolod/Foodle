export const getBasket = (state) => {
    return state.basket.basket
}

export const getCount = (state) => {
    return state.basket.basket.length
}

export const getValue = (state) => {
    return state.basket.basket.reduce((total, basket) => total + basket.price.value, 0)
}

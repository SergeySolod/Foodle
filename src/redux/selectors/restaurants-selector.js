export const getRestaurants = (state) => {
    return state.restaurants.restaurants
}

export const getIsFetching = (state) => {
    return state.restaurants.isFetching
}

export const getLatLong = (state) => {
    return state.restaurants.restaurants[0]
}

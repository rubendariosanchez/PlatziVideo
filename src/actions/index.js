export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload: payload
});

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload: payload
});
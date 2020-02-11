const initialState = {
    isLoading: false,
    page: 1,
    products: [],
    preloadedProducts: [],
    shouldRenderNextPage: true,
    fetchingNextPage: false,
    sortBy: null
};

function reducer( state = initialState, action ) {
    switch( action.type ) {
        default:
            return state;
    }
}

export default reducer;

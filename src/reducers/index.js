import {
    SET_LOADING,
    SET_PRODUCTS,
    SET_PRELOADED_PRODUCTS,
    SET_PAGE,
    SET_SORT_BY,
    SET_SHOULD_RENDER_NEXT_PAGE,
    SET_FETCHING_NEXT_PAGE,
    SET_IS_END_OF_PRODUCT_LIST
} from '../actions/types';

const initialState = {
    isLoading: false,
    page: 1,
    products: [],
    preloadedProducts: [],
    shouldRenderNextPage: true,
    fetchingNextPage: false,
    sortBy: null,
    isEndOfProductList: false
};

function reducer( state = initialState, action ) {
    switch( action.type ) {
        case SET_LOADING:
            return { ...state, isLoading: action.payload };
        case SET_PRODUCTS:
            return { ...state, products: action.payload };
        case SET_PRELOADED_PRODUCTS:
            return { ...state, preloadedProducts: action.payload };
        case SET_PAGE:
            return { ...state, page: action.payload };
        case SET_SORT_BY:
            return { ...state, sortBy: action.payload };
        case SET_SHOULD_RENDER_NEXT_PAGE:
            return { ...state, shouldRenderNextPage: action.payload };
        case SET_FETCHING_NEXT_PAGE:
            return { ...state, fetchingNextPage: action.payload };
        case SET_IS_END_OF_PRODUCT_LIST:
            return { ...state, isEndOfProductList: action.payload };
        default:
            return state;
    }
}

export default reducer;

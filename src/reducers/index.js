import { insertAdsToProducts } from '../utils/ad';

import {
    SET_LOADING,
    SET_PRODUCTS,
    SET_PRELOADED_PRODUCTS,
    SET_PAGE,
    SET_SORT_BY,
    SET_SHOULD_RENDER_NEXT_PAGE,
    SET_FETCHING_NEXT_PAGE,
    SET_IS_END_OF_PRODUCT_LIST,
    RESET_ADS
} from '../actions/types';

const initialState = {
    isLoading: false,
    page: 1,
    products: [],
    preloadedProducts: [],
    shouldRenderNextPage: true,
    fetchingNextPage: false,
    sortBy: null,
    isEndOfProductList: false,
    adCount: 0,
    prevAdId: null
};

function reducer( state = initialState, action ) {
    switch( action.type ) {
        case SET_LOADING:
            return { ...state, isLoading: action.payload };
        case SET_PRODUCTS:
            const result = insertAdsToProducts(
                [...action.payload],
                {
                    count: state.adCount,
                    prev: state.prevAdId
                }
            );

            const {
                productsWithAds,
                adCount,
                prevAdId
            } = result;

            return {
                ...state,
                products: productsWithAds,
                adCount,
                prevAdId
            };
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
        case RESET_ADS:
            return {
                ...state,
                adCount: 0,
                prevAdId: null
            }
        default:
            return state;
    }
}

export default reducer;

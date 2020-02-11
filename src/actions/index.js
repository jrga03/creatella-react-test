import {
    SET_LOADING,
    SET_PAGE,
    GET_PRODUCTS,
    SET_PRODUCTS,
    GET_PRELOADED_PRODUCTS,
    SET_PRELOADED_PRODUCTS,
    SET_SHOULD_RENDER_NEXT_PAGE,
    LOAD_MORE_ITEMS,
    SET_SORT_BY,
    SET_FETCHING_NEXT_PAGE,
    SET_IS_END_OF_PRODUCT_LIST
} from './types';

export function getProducts( payload ) {
    return {
        type: GET_PRODUCTS,
        payload
    };
}

export function loadMoreItems() {
    return {
        type: LOAD_MORE_ITEMS
    };
}

export function setSortBy( payload ) {
    return {
        type: SET_SORT_BY,
        payload
    }
}

export function setLoading( payload ) {
    return {
        type: SET_LOADING,
        payload
    };
}

export function setPage( payload ) {
    return {
        type: SET_PAGE,
        payload
    };
}

export function setProducts( payload ) {
    return {
        type: SET_PRODUCTS,
        payload
    };
}

export function getPreloadedProducts( payload ) {
    return {
        type: GET_PRELOADED_PRODUCTS,
        payload
    };
}

export function setPreloadedProducts( payload ) {
    return {
        type: SET_PRELOADED_PRODUCTS,
        payload
    };
}

export function setShouldRenderNextPage( payload ) {
    return {
        type: SET_SHOULD_RENDER_NEXT_PAGE,
        payload
    };
}

export function setFetchingNextPage( payload ) {
    return {
        type: SET_FETCHING_NEXT_PAGE,
        payload
    };
}

export function setIsEndOfProductList( payload ) {
    return {
        type: SET_IS_END_OF_PRODUCT_LIST,
        payload
    };
}

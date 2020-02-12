import {
    all,
    call,
    put,
    cancel,
    takeEvery,
    takeLatest,
    select,
    fork
} from 'redux-saga/effects'

import { getProducts } from '../api';
import { LIMIT_PER_PAGE } from '../constants';

import {
    GET_PRODUCTS,
    LOAD_MORE_ITEMS
} from '../actions/types';
import {
    setLoading,
    setProducts,
    setPreloadedProducts,
    setPage,
    setFetchingNextPage,
    setShouldRenderNextPage,
    setIsEndOfProductList,
    resetAds,
} from '../actions';

function* fetchProducts({ payload }) {
    try {
        yield put( setLoading( true ));
        yield call( window.scrollTo, { top: 0, behavior: 'smooth' });
        yield put( setProducts([]));
        yield put( setPreloadedProducts([]));
        yield put( setPage( 1 ));
        yield put( setIsEndOfProductList( false ));
        yield put( resetAds());

        const products = yield call( getProducts, payload );

        yield put( setProducts( products ));
        yield call( preLoadNextPage );
    } catch ( error ) {
        /**
         * Handle error
         */
    } finally {
        yield put( setLoading( false ));
    }
}

function* preLoadNextPage() {
    try {
        yield put( setFetchingNextPage( true ));

        const currentPage = yield select(({ page }) => page );
        const sortBy = yield select(({ sortBy }) => sortBy );
        const nextPage = currentPage + 1;
        const sort = sortBy ? sortBy.value : null;

        const payload = {
            page: nextPage,
            limit: LIMIT_PER_PAGE,
            sort
        };
        const preloadedProducts = yield call( getProducts, payload );

        if ( preloadedProducts.length === LIMIT_PER_PAGE ) {
            yield put( setPreloadedProducts( preloadedProducts ));
            yield put( setPage( nextPage ));
        } else {
            yield put( setIsEndOfProductList( true ));
        }
    } catch ( error ) {
        /**
         * Handle error
         */
    } finally {
        yield put( setFetchingNextPage( false ));
        yield put( setLoading( false ));
    }
}

function* loadMoreItems() {
    const preloadedProducts = yield select(({ preloadedProducts }) => preloadedProducts );
    const fetchingNextPage = yield select(({ fetchingNextPage }) => fetchingNextPage );

    if ( fetchingNextPage ) {
        yield put( setLoading( true ));
        yield put( setShouldRenderNextPage( true ));
    } else if ( preloadedProducts.length > 0 ) {
        const products = yield select(({ products }) => products );
        const updatedProducts = products.concat( preloadedProducts );

        yield put( setProducts( updatedProducts ));
        yield put( setPreloadedProducts([]));
        yield put( setShouldRenderNextPage( false ));

        const preloadTask = yield fork( preLoadNextPage );
        yield fork( watchForGetProducts, preloadTask );
    }
}

function* watchForGetProducts( taskToCancel ) {
    yield takeLatest( GET_PRODUCTS, cancelTask, taskToCancel );
}

function* cancelTask( task ) {
    yield cancel( task );
}

export default function* rootSaga() {
    yield all([
        takeLatest( GET_PRODUCTS, fetchProducts ),
        takeEvery( LOAD_MORE_ITEMS, loadMoreItems )
    ]);
}
import { all, call, put, takeLatest, select } from 'redux-saga/effects'
import { getProducts } from '../api';

function* fetchProducts({ payload }) {
    try {
        yield put({
            type: 'SET_LOADING',
            payload: true
        });
        yield put({
            type: 'SET_PRODUCTS',
            payload: []
        });
        yield put({
            type: 'SET_PRELOADED_PRODUCTS',
            payload: []
        });
        yield put({
            type: 'SET_PAGE',
            payload: 1
        });

        const currentPage = yield select(( state ) => state.page );

        const products = yield call( getProducts, payload );
        yield all([
            put({
                type: 'SET_PRODUCTS',
                payload: products
            }),
            put({
                type: 'SET_PAGE',
                payload: currentPage + 1
            })
        ]);
    } catch ( error ) {
        /**
         * Handle error
         */
    } finally {
        yield put({
            type: 'SET_LOADING',
            payload: false
        });
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest( 'GET_PRODUCTS', fetchProducts )
    ]);
}
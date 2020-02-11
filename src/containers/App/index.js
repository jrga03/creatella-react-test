import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { isBottomOfPage } from '../../utils/scroll';

import { SORT_OPTIONS, LIMIT_PER_PAGE } from '../../constants';
import {
    getProducts,
    loadMoreItems,
    setSortBy
} from '../../actions';

import Loader from '../../components/Loader';
import SortBy from '../../components/SortBy';

import FaceList from '../FaceList';

import {
    Container,
    Header,
    LoadingWrapper,
    Footer
} from './styles';

function App() {
    const dispatch = useDispatch();

    const page = useSelector(({ page }) => page );
    const products = useSelector(({ products }) => products );
    const preloadedProducts = useSelector(({ preloadedProducts }) => preloadedProducts );
    const isEndOfProductList = useSelector(({ isEndOfProductList }) => isEndOfProductList );
    const fetchingNextPage = useSelector(({ fetchingNextPage }) => fetchingNextPage );
    const sortBy = useSelector(({ sortBy }) => sortBy );

    /**
     * Create a scroll listener on component load
     */
    useEffect(() => {
        const sort = sortBy ? sortBy.value : null;
        dispatch( getProducts({ page, limit: LIMIT_PER_PAGE, sort }));

        window.addEventListener( 'scroll', onScroll, { passive: true });
        return () => window.removeEventListener( 'scroll', onScroll );
    }, [])

    useEffect(() => {
        if ( preloadedProducts.length > 0 && !fetchingNextPage && isBottomOfPage()) {
            dispatch( loadMoreItems());
        }
    }, [preloadedProducts, fetchingNextPage])

    /**
     * Callback for scroll event
     */
    function onScroll() {
        if ( isBottomOfPage() && !isEndOfProductList ) {
            dispatch( loadMoreItems());
        }
    }

    /**
     * Sets selected sort method to state
     * @param {object} selected - Selected option
     */
    function onSortChange( selected ) {
        const current = sortBy ? sortBy.value : null;
        const next = selected ? selected.value : null;
        if ( current !== next ) {
            dispatch( setSortBy( selected ));
            dispatch( getProducts({ page: 1, limit: LIMIT_PER_PAGE, sort: next }));
        }
    }

    return (
        <Container>
            <Header>
                <SortBy
                    value={ sortBy }
                    options={ SORT_OPTIONS }
                    onChange={ onSortChange }
                />
            </Header>
            { products.length === 0
                ? (
                    <LoadingWrapper>
                        <Loader />
                    </LoadingWrapper>
                )
                : <FaceList />
            }
            { isEndOfProductList && (
                <Footer>
                    ~ end of catalogue ~
                </Footer>
            ) }
        </Container>
    );
}

export default App;

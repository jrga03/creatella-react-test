import React, { useState, useEffect, useRef } from 'react';

import { getProducts } from '../../api';

import Loader from '../../components/Loader';
import FaceList from '../../components/FaceList';
import SortBy from '../../components/SortBy';

import { Container, Header } from './styles';

const SORT_OPTIONS = [
    { value: 'price', label: 'Price' },
    { value: 'size', label: 'Size' },
    { value: 'id', label: 'ID' }
];

function App() {
    const [ isLoading, setIsLoading ] = useState( false );
    const [ page, setPage ] = useState( 1 );
    const [ products, setProducts ] = useState([]);
    const [ sortBy, setSortBy ] = useState( null );

    const listRef = useRef( null );

    /**
     * Create a scroll listener on component load
     */
    useEffect(() => {
        console.log( 'onload' );
        window.addEventListener( 'scroll', onScroll );
        return () => window.removeEventListener( 'scroll', onScroll );
    }, [])

    useEffect(() => {
        getData();
    }, [sortBy]);

    function onScroll( event ) {
        console.log( 'onscroll', window.innerHeight, document.documentElement.scrollTop, document.documentElement.offsetHeight );
        console.log( listRef.current.getBoundingClientRect() );
        if ( window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight ) {
            console.log('Fetch more list items!');
        }
    }

    /**
     * Fetch products
     */
    async function getData() {
        setIsLoading( true );
        const sort = sortBy ? sortBy.value : null;
        const products = await getProducts({ page, limit: 50, sort });
        setProducts( products );
        setIsLoading( false );
    }

    /**
     * Sets selected sort method to state
     * @param {object} selected - Selected option
     */
    function onSortChange( selected ) {
        const current = sortBy ? sortBy.value : null;
        const next = selected ? selected.value : null;
        if ( current !== next ) {
            setProducts([]);
            setPage( 1 );
            setSortBy( selected );
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
                ? <Loader />
                : <FaceList faces={ products } onRef={ listRef } />
            }
        </Container>
    );
}

export default App;

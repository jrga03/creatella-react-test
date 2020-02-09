import React, { useState, useEffect } from 'react';

import { getProducts } from '../../api';

import { Wrapper } from './styles';

function App() {
    const [ page, setPage ] = useState( 1 );
    const [ products, setProducts ] = useState([]);

    /**
     * Called on initial loading of the page
     * Fetches first set of data
     */
    useEffect(() => {
        async function getData() {
            const products = await getProducts({ page });
            setProducts( products );
        }

        getData();
    }, []);

    return (
        <Wrapper>
            { products.map(( product ) => (
                <span key={ product.id }>
                    { product.face }
                </span>
            )) }
        </Wrapper>
    );
}

export default App;

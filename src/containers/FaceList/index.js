import React from 'react';
import { useSelector } from 'react-redux'

import Face from '../../components/Face';
import Ad from '../../components/Ad';
import Loader from '../../components/Loader';

import ListWrapper from './styles';

function FaceList() {
    const isLoading = useSelector(({ isLoading }) => isLoading );
    const products = useSelector(({ products }) => products );

    return (
        <ListWrapper>
            { products.map(( product, index ) => (
                typeof product === 'object'
                    ? (
                        <Face key={ product.id } {...product} />
                    )
                    : (
                        <Ad key={ `${index}${product}` } id={ product } />
                    )
            )) }

            { isLoading && <Loader /> }
        </ListWrapper>
    );
}

export default FaceList;

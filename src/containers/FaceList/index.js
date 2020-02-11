import React from 'react';
import { useSelector } from 'react-redux'

import Face from '../../components/Face';
import Loader from '../../components/Loader';

import ListWrapper from './styles';

function FaceList() {
    const isLoading = useSelector(({ isLoading }) => isLoading );
    const products = useSelector(({ products }) => products );

    return (
        <ListWrapper>
            { products.map(( face ) => (
                <Face key={ face.id } {...face} />
            )) }

            { isLoading && <Loader /> }
        </ListWrapper>
    );
}

export default FaceList;

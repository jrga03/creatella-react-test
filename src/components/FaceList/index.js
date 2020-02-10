import React from 'react';
import PropTypes from 'prop-types';

import Face from '../Face';
import Loader from '../Loader';

import ListWrapper from './styles';

function FaceList({ faces, loading }) {
    return (
        <ListWrapper>
            { faces.map(( face ) => (
                <Face key={ face.id } {...face} />
            )) }

            { loading && <Loader /> }
        </ListWrapper>
    );
}

FaceList.propTypes = {
    faces: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired,
    loading: PropTypes.bool
};

FaceList.defaultProps = {
    loading: false
}

export default FaceList;

import React from 'react';
import PropTypes from 'prop-types';

import Face from '../Face';

import ListWrapper from './styles';

function FaceList({ faces }) {
    return (
        <ListWrapper>
            { faces.map(( face ) => (
                <Face key={ face.id } {...face} />
            )) }
        </ListWrapper>
    );
}

FaceList.propTypes = {
    faces: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired
};

export default FaceList;

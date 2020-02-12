import React from 'react';
import PropTypes from 'prop-types';

import AdWrapper from './styles';

function Ad({ id }) {
    return (
        <AdWrapper>
            <img className="ad" src={ `${process.env.API_URL}/ads/?r=${id}` }/>
        </AdWrapper>
    );
}

Ad.propTypes = {
    id: PropTypes.number.isRequired
}

export default Ad;
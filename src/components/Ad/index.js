import React from 'react';
import PropTypes from 'prop-types';

function Ad({ rand }) {
    return (
        <img class="ad" src={ `/ads/?r=${rand}` }/>
    );
}

Ad.propTypes = {
    rand: PropTypes.number.isRequired
}

export default Ad;
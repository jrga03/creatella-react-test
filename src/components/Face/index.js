import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from '../../utils/date';
import { formatPrice } from '../../utils/currency';

import StyledLi from './styles';

function Face({ id, face, size, price, date }) {
    return (
        <StyledLi key={ id } size={ size }>
            <span className="date-added">
                { formatDate( date ) }
            </span>
            <div className="face">
                { face }
            </div>
            <span className="price">
                { formatPrice( price ) }
            </span>
        </StyledLi>
    );
}

Face.propTypes = {
    id: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    face: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default Face;

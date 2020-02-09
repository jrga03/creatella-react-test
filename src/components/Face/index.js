import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from '../../utils/date';

import StyledLi from './styles';

function Face({ id, face, size, price, date }) {
    return (
        <StyledLi key={ id } size={ size }>
            <div className="face">
                { face }
            </div>
            <span>
                Added: { formatDate( date ) }
            </span>
            <span>
                Price: { price }
            </span>
        </StyledLi>
    );
}

export default Face;

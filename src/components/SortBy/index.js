import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    margin-right: 10%;

    .label {
        margin-right: 4px;
    }

    .select {
        flex: 1;
    }
`;

function SortBy({ value, options, onChange }) {
    return (
        <Wrapper>
            <span className="label">Sort by:</span>
            <Select
                className="select"
                value={ value }
                options={ options }
                onChange={ onChange }
                isSearchable={ false }
                isClearable
            />
        </Wrapper>
    );
}

SortBy.propTypes = {
    value: PropTypes.any,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any.isRequired,
            label: PropTypes.node.isRequired
        }).isRequired
    ),
    onChange: PropTypes.func
}

SortBy.defaultProps = {
    value: null,
    options: [],
    onChange: () => {}
}

export default SortBy;
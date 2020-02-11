import React from 'react';

import Wrapper from './styles';

function Loader() {
    return (
        <Wrapper>
            Loading
                <span className="dot">.</span>
                <span className="dot two">.</span>
                <span className="dot three">.</span>
        </Wrapper>
    );
}

export default Loader;

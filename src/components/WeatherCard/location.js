import React from 'react';
import styled from '@emotion/styled';

const Location = (props) => 
{

    const locationContainer = styled.div`
        text-align:center;
    `

    return (
    <locationContainer >
        <h1 className='city Merri' >Sydney</h1>
        <h3 className='country Merri' >AU</h3>
    </locationContainer>
    );
}

export default Location;
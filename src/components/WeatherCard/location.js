import React from 'react';
import styled from '@emotion/styled';

const Location = (props) => 
{
    const fontFamily = 'font-family: Merriweather, sans-serif;';

    const locationContainer = styled.div`
        text-align:center;
    `

    const City = styled.h1`
        ${fontFamily}
        font-size: 1.6rem;
    `

    const Country = styled.h3`
        ${fontFamily}
        font-size: 1.1rem;
    `

    return (
    <locationContainer>
        <City>Sydney</City>
        <Country className='country Merri' >AU</Country>
    </locationContainer>
    );
}

export default Location;
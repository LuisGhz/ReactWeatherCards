import React from 'react';
import styled from '@emotion/styled'

import Location from './Location';

const WeatherCard = (props) => 
{
    const red = 200;
    const Card = styled.div`
        margin: 0 auto;
        background: linear-gradient(to bottom, rgba(${red}, 200, 200), pink);
        width: 200px;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;
    `

    return (
        <Card className='Card'>
            <Location />
            <img className='icon' src="./img/Mostly Sunny-2x.png" alt="Wheather icon" />
            <h1 className='temp Merri' >20 °C</h1>
            <h3 className='condition Merri' >Clouds</h3>
        </Card>
    );
}

export default WeatherCard;
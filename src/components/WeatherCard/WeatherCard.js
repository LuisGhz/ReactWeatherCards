import React from 'react';
import styled from '@emotion/styled'

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
            <div className='location'>
            <h1 className='city Merri' >Sydney</h1>
            <h3 className='country Merri' >AU</h3>
            </div>
            <img className='icon' src="./img/Mostly Sunny-2x.png" alt="Wheather icon" />
            <h1 className='temp Merri' >20 °C</h1>
            <h3 className='condition Merri' >Clouds</h3>
        </Card>
    );
}

export default WeatherCard;
import React from "react";
import styled from "@emotion/styled";

const Condition = props => {
  const fontFamily = "font-family: Merriweather, sans-serif;";

  const Temp = styled.h1`
    ${fontFamily}
    font-size: 2rem;
  `;

  const State = styled.h3`
    ${fontFamily}
    font-size: 1.2rem;
  `;
  return (
    <>
      <Temp>20 °C</Temp>
      <State>Clouds</State>
    </>
  );
};

export default Condition;

import React from "react";
import styled from "@emotion/styled";

const Icon = props => {
  const Img = styled.img`
    width: 40%;
  `;

  return (
    <Img className="icon" src="./img/Mostly Sunny-2x.png" alt="Wheather icon" />
  );
};

export default Icon;

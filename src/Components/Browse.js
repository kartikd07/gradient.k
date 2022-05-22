import React from "react";
import styled from "styled-components";
import colorsData from "../assets/Colors.json";
import "../App.css";
import GradientContainer from "./GradientContainer";
import { useState } from "react";

const Browse = () => {
  const [filtercolor, setFilter] = useState("All");
  const scrollRight = () => {
    document.querySelector(".colorPalette").scrollBy(250, 0);
  };
  const scrollLeft = () => {
    document.querySelector(".colorPalette").scrollBy(-250, 0);
  };

  return (
    <>
      <ColorPalette className="colorPalette">
        <button onClick={scrollLeft}>{"<"}</button>
        <button onClick={scrollRight}>{">"}</button>
        {colorsData.map((data) => {
          return (
            <Color key={data.cid}>
              <div className="border">
                <ColorCircle
                  className={data.colorType}
                  onClick={() => {
                    setFilter(data.colorType);
                  }}
                >
                  K
                </ColorCircle>
              </div>
              <div className="colorTitle">{data.colorType}</div>
            </Color>
          );
        })}
      </ColorPalette>
      <GradientContainer filtercolor={filtercolor}></GradientContainer>
    </>
  );
};

// color palette and it's styled components
const ColorPalette = styled.nav`
  position: fixed;
  width: 100%;
  top: 12vh;
  left: 0;
  @media (min-width: 768px) {
    top: 13vh;
  }
  padding: 2px 20px;
  background-color: black;
  display: flex;
  height: fit-content;
  padding: 20px 15px;
  justify-content: start;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  button {
    font-weight: 900;
    background: none;
    color: white;
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 7px;
    margin: 2px;
    position: fixed;
    cursor: pointer;
    z-index: 1;
  }
  > :nth-child(1) {
    left: 0;
  }
  > :nth-child(2) {
    right: 0;
  }
  > :nth-child(1)::before {
    content: "";
    position: fixed;
    height: 12vh;
    width: 43px;
    left: -3px;
    background: linear-gradient(to right, black, #45454500);
    z-index: -1;
    @media (min-width: 768px) {
      height: 13vh;
    }
  }
  > :nth-child(2)::before {
    content: "";
    position: fixed;
    height: 12vh;
    width: 43px;
    right: -3px;
    background: linear-gradient(to left, black, #45454500);
    z-index: -1;
  }
`;

const Color = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  width: 60px;
  height: 80px;
  justify-content: center;
  .colorTitle {
    color: wheat;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  margin: 0px 15px;
  > .border {
    border: 1px solid white;
    border-radius: 50%;
    padding: 2px;
  }
`;

const ColorCircle = styled.div`
  height: 65px;
  width: 65px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  background-color: red;
  cursor: default;
`;

export default Browse;
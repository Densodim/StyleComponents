import React, { Component } from "react";

import "./App.css";
import styled from "styled-components";
import { StyledBtm } from "./Styled/Button.tsx";
import { GlobalStyled } from "./Styled/Global.tsx";
import { Thema } from "./Styled/Thema.tsx";



class App extends Component {
  render() {
    return (
      <>
      <GlobalStyled/>
      
        <Menu>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </Menu>
        <Box>
          <div>Hello World</div>
          <StyledBtm as={"a"} color={Thema.color.secondary.light}>Hello World</StyledBtm>
          <StyledBtm fondsize={Thema.size.medium}>Button</StyledBtm>
          <StyledSyperBtm>Hello World</StyledSyperBtm>
          <StyledBtm btmtype="primary" color="red">Button style primery</StyledBtm>
          <StyledBtm btmtype="outline" color="black">Button style outline</StyledBtm>
        </Box>
      </>
    );
  }
}

export default App;



const StyledSyperBtm = styled(StyledBtm)`
  border-radius: 20px;
`;

const Box = styled.div`
  padding: 10px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  button {
    background-color: wheat;
  }
  ${StyledSyperBtm} {
    cursor: crosshair;
  }
  @media ${Thema.media.mobile} {
    flex-direction: column;
  }
`;

const Menu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    
    li > a {
      color: rebeccapurple;
    }
    li + li {
      margin-left: 20px;
    }
  }
`;

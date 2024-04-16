import styled, { css } from "styled-components";
import { Animation } from "./animation/Animation";
import { Thema } from "./Thema.tsx";
// import PropTypes from "prop-types";

type BtmType = {
  btmtype?: "primary" | "outline"
  color?: string,
  fondsize?: string,

};

export const StyledBtm = styled.button<BtmType>`
  padding: 10px;
  margin: 10px;
  color: ${Thema.color.primary};
  background-color: ${(s) => s.color || "blue"};
  border-radius: 10px;
  font-size: ${(s) => s.fondsize || "20px"};
  font-weight: bold;
  &:hover {
    background-color: yellow;
  }
  animation: ${Animation} 3s;

  //primary
  ${(s) =>
    s.btmtype === "primary" &&
    css<BtmType>`
      border: 3px solid ${(s) => s.color};
      color: ${(s) => s.color};
      &:hover {
        background-color: gray;
      }
    `}
  //outline
  ${(s) =>
    s.btmtype === "outline" &&
    css<BtmType>`
      background-color: transparent;
      color: ${(s) => s.color};
    `}
`;

// StyledBtm.defaultProps = {
//   color: "blue",
//   fondsize: "20px",
// };

// StyledBtm.propTypes = {
//   color: PropTypes.string,
//   fondsize: PropTypes.string,
//   btmtype: PropTypes.oneOf(["primary", "outline"]),
// };
// css.propTypes = {
//   color: PropTypes.string,
//   fondsize: PropTypes.string,
// };

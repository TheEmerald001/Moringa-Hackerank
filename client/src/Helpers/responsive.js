import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 1280px) {
      ${props}
    }
  `;
};

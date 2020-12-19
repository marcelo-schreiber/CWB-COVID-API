import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin-top: 6.2rem;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  > h1 {
    text-align: center;

    font-family: "Lobster", cursive;
    font-style: normal;
    font-weight: 300;
    font-size: 7.5rem;
    line-height: 8.8rem;
    display: flex;
    align-items: center;
    letter-spacing: 2px;

    color: #ffffff;

    @media only screen and (max-width: 490px) {
      font-size: 6.5rem;
    }
  }
`;

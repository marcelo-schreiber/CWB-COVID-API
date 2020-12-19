import styled from "styled-components";

export const FaqTitle = styled.h2`
  text-align: center;

  font-style: normal;
  font-weight: 300;
  font-size: 4.5rem;
  line-height: 5.3rem;
  /* identical to box height */

  letter-spacing: 2px;

  margin: 10rem 0;
`;

export const FaqContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  grid-gap: 4rem;

  margin: 0 4rem;

  @media only screen and (max-width: 710px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FaqItem = styled.div`
  justify-self: center;

  > h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 2.25rem;
    line-height: 2.6rem;
    display: flex;
    align-items: center;
    letter-spacing: 2px;

    color: #ffffff;
  }

  > p {
    margin: 3.5rem 0;

    font-style: normal;
    font-weight: 300;
    font-size: 2.25rem;
    line-height: 2.6rem;
    letter-spacing: 2px;

    color: #ffffff;
  }

  @media only screen and (max-width: 710px) {
    width: 100%;
  }
`;

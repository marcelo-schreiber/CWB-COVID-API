import styled from "styled-components";

export const LandingContainer = styled.section`
  margin-top: 13.5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 100%;

  @media only screen and (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LandingTitle = styled.h2`
  max-width: 55rem;

  font-style: normal;
  font-weight: 300;
  font-size: 6rem;
  line-height: 7rem;
  display: flex;
  align-items: center;
  letter-spacing: 2px;

  color: #ffffff;

  transition: 0.4s ease-in;
`;

export const Button = styled.button`
  margin-top: 7.5rem;

  font-style: normal;
  font-weight: 500;
  font-size: 3rem;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 6px;

  color: #ffffff;

  padding: 1.5rem 7rem;

  border: none;

  background-color: #721ab7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  cursor: pointer;

  transition: background-color 0.35s ease-in;

  animation: appear 1.1s ease-out forwards;

  opacity: 0;

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  :hover {
    background-color: #5e01a7;
  }
`;

export const UsingApiTitle = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 4.5rem;
  line-height: 5.3rem;

  letter-spacing: 2px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const UsingApip = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 2.25rem;
  line-height: 132.69%;
  /* or 30px */

  margin: 3.2rem 0;

  letter-spacing: 0.25px;

  color: #ffffff;
`;

export const JsonApi = styled.pre`
  font-style: normal;
  font-weight: normal;
  font-size: 2.25rem;
  line-height: 132.69%;
  /* or 30px */

  letter-spacing: 0.25px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ApiContainer = styled.section`
  background: #721ab7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  height: 100%;

  position: relative;

  padding: 2.6rem 4.8rem;

  @media only screen and (max-width: 1250px) {
    margin: 4rem 0;
  }

  @media only screen and (max-width: 650px) {
    width: 95vw;
  }
`;

export const LoadingContainer = styled.div`
  margin: 0 auto;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const LeftContainer = styled.div`
  @media only screen and (max-width: 650px) {
    width: 95vw;
  }
`;

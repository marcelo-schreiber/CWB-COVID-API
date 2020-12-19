import styled from "styled-components";

export const EndpointsTitle = styled.h2`
  margin: 10rem 0;

  font-style: normal;
  font-weight: 300;
  font-size: 4.5rem;
  line-height: 5.3rem;
  /* identical to box height */

  letter-spacing: 2px;

  color: #ffffff;

  text-align: center;
`;

export const Endpoint = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 2.25rem;

  margin: 4rem 0;

  max-width: 95vw;

  line-height: 132.69%;
  /* or 30px */

  text-align: center;

  letter-spacing: 0.25px;

  color: #ffffff;

  svg {
    margin: 0 0.8rem;
  }
`;

export const EndpointsContainer = styled.div`
  height: 26rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;

  > :nth-child(1) {
    margin-top: 0;
  }
`;

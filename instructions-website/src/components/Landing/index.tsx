import React, { useState, useEffect } from "react";

import {
  LandingContainer,
  LandingTitle,
  Button,
  UsingApiTitle,
  UsingApip,
  JsonApi,
  ApiContainer,
  LoadingContainer,
  LeftContainer,
} from "./styles";

import { FaFileCode } from "react-icons/fa";

import ReactLoading from "react-loading";

const Landing: React.FC = () => {
  const [data, setData] = useState<undefined | {}>(undefined);

  useEffect(() => {
    fetch("https://cwb-covid.herokuapp.com/api/last")
      .then(x => x.json())
      .then(res => setData(res));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const el = document.getElementById("faq");

    el?.scrollIntoView();
  };

  return (
    <LandingContainer>
      <LeftContainer>
        <LandingTitle>REST API de COVID-19 gratuita.</LandingTitle>
        <Button onClick={handleClick}>VER MAIS</Button>
      </LeftContainer>
      <ApiContainer>
        <UsingApiTitle>Usando a API</UsingApiTitle>
        <UsingApip>
          GET{" "}
          <a
            href="https://cwb-covid.herokuapp.com/api/last"
            target="_blank"
            rel="noreferrer">
            https://cwb-covid.herokuapp.com/api/last
          </a>
        </UsingApip>
        {data ? (
          <JsonApi>{JSON.stringify(data, undefined, 2)}</JsonApi>
        ) : (
          <LoadingContainer>
            <ReactLoading type="bubbles" color="#FFF" />
          </LoadingContainer>
        )}
        <FaFileCode style={{ position: "absolute", right: "-7", top: "-20" }} size={64} />
      </ApiContainer>
    </LandingContainer>
  );
};

export default Landing;

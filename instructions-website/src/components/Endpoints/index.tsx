import React from "react";

import { EndpointsTitle, Endpoint, EndpointsContainer } from "./styles";

import { FiArrowRight } from "react-icons/fi";

const Endpoints: React.FC = () => {
  return (
    <div>
      <EndpointsTitle>Endpoints</EndpointsTitle>

      <EndpointsContainer>
        <Endpoint>
          GET{" "}
          <a
            href="https://cwb-covid.herokuapp.com/api/last"
            target="_blank"
            rel="noreferrer">
            /api/last
          </a>
          <FiArrowRight />
          Último dado coletado.
        </Endpoint>
        <Endpoint>
          GET{" "}
          <a
            href={`https://cwb-covid.herokuapp.com/api/filter?offset=2&limit=2`}
            target="_blank"
            rel="noreferrer">
            {`/api/filter?offset=n&limit=n`}
          </a>
          <FiArrowRight />
          Dados coletados com deslocamentos e limites.
        </Endpoint>
        <Endpoint>
          GET{" "}
          <a
            href="https://cwb-covid.herokuapp.com/api/all"
            target="_blank"
            rel="noreferrer">
            /api/all
          </a>{" "}
          <FiArrowRight /> Todos os dados coletados.
        </Endpoint>
      </EndpointsContainer>
    </div>
  );
};

export default Endpoints;

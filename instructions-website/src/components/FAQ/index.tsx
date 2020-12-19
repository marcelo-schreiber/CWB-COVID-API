import React from "react";

import { FaqTitle, FaqContainer, FaqItem } from "./styles";

const FAQ: React.FC = () => {
  return (
    <div id="faq">
      <FaqTitle>FAQ</FaqTitle>
      <FaqContainer>
        <FaqItem>
          <h4>Posso usar isso em meu projeto?</h4>
          <p>
            Sim. Faça o que quiser!&nbsp;
            <a href="mailto:marcelorissette15@gmail.com">Avise-me o que você fez.</a>
          </p>
        </FaqItem>
        <FaqItem>
          <h4>A API tem uma taxa de limite?</h4>
          <p>Não, mas seja bondoso.</p>
        </FaqItem>
        <FaqItem>
          <h4>É código aberto? Posso contribuir?</h4>
          <p>
            Sim! veja meu código no&nbsp;
            <a
              href="https://github.com/marcelo-schreiber/API-covid-cwb"
              target="_blank"
              rel="noreferrer">
              github.
            </a>
          </p>
        </FaqItem>
      </FaqContainer>
    </div>
  );
};

export default FAQ;

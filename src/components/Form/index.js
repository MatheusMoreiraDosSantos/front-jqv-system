import React from "react";

import { Container, InputsContainer } from "./styles";

function Form() {
  return (
    <Container>
      <h3>Preencha o formulário abaixo</h3>
      <InputsContainer>
        <input type="text" placeholder="Nome completo" />
      </InputsContainer>
    </Container>
  );
}

export default Form;

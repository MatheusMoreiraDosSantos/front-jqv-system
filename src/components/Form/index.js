import React from "react";

import { Container, InputsContainer, ButtonsContainer } from "./styles";

import Input from "../Input";

function Form() {
  const options = [
    {
      text: "Selecione",
      value: "",
    },
    {
      text: "Masculino",
      value: "masculino",
    },
    {
      text: "Feminino",
      value: "feminino",
    },
  ];
  return (
    <Container>
      <h3>Preencha o formulário abaixo</h3>
      <InputsContainer>
        <h4>Informações principais</h4>
        <Input required={true} type="text" label="Nome completo" />
        <Input required={true} type="select" label="Sexo" options={options} />
        <Input required={true} type="date" label="Data de Nascimento" />
        <Input required={true} type="number" label="Telefone/Whatsapp" />
        <h4>Endereço</h4>
        <Input required={true} type="text" label="Endereço" />
        <Input required={true} type="number" label="CEP" />
        <Input required={true} type="text" label="Cidade" />
        <Input required={true} type="text" label="Bairro" />
        <Input required={true} type="text" label="Rua" />
        <Input required={true} type="text" label="Complemento" />
        <Input required={true} type="text" label="Número" />
        <h4>Mais sobre você:</h4>
        <Input required={true} type="text" label="Mora com quem ?" />
        <h4>Ja é batizado? se sim, quando foi batizado ?</h4>
        <Input required={true} type="date" label="Data do Batismo" />
      </InputsContainer>
      <ButtonsContainer>
        <button>Cancelar</button>
        <button>Salvar</button>
      </ButtonsContainer>
    </Container>
  );
}

export default Form;

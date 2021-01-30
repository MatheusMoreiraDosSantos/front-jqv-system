import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  > h3 {
    color: #eee;
    font-weight: 300;
    margin: 10px;
  }
`;
export const InputsContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  > input {
    width: 100%;
  }
  > h4,
  h6 {
    color: #eee;
    font-weight: 300;
    margin-top: 20px;
  }
  > select {
    width: 100%;
  }
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  button {
    width: 150px;
    height: 40px;
    background: linear-gradient(90deg, #da4453 0%, #89216b 100%);
    box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.43);
    border: 0;
    border-radius: 5px;
    color: #eee;
    font-size: 16px;
    margin: 10px;
  }
`;

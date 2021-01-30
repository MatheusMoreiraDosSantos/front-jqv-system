import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #eee;
  > div {
    margin-top: 15px;
    > small {
      color: red;
      font-size: 16px;
      margin: 4px;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40px;
  background: linear-gradient(90deg, #da4453 0%, #89216b 100%);
  box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.43);
  display: flex;
  justify-content: center;
  align-items: center;
  > h3 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #eee;
  }
`;

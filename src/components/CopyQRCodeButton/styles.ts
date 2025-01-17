import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

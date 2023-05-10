import styled from '@emotion/styled';
export const UP_BUTTON = styled.button`
  display: none;
  position: fixed;
  bottom: 40px;
  right: 10px;
  z-index: 99;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  color: #fff;
  background-color: red;
  font-size: 38px;
  opacity: 0.7;
  transition: all 0.3s ease 0s;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

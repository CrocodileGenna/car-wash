import styled from '@emotion/styled';
export const SECTION = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 35px 15px;
  // border-top: 1px solid #00000069;
  // border-bottom: 1px solid #00000069;
  color: black;
  // background: #dddcdd;
  @media screen and (min-width: 760px) {
    padding: 40px 20px;
  }
`;
export const TITLE_H2 = styled.h2`
  span {
    color: red;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 800;
`;
export const IMG = styled.img`
  display: block;
  border-radius: 5px;
  object-fit: cover;
  margin: 5px;
  width: 100px;
  height: 100px;
  transition: all 0.3s ease 0s;
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media screen and (min-width: 460px) {
    width: 150px;
    height: 120px;
  }
  @media screen and (min-width: 760px) {
    margin: 10px;
    width: 200px;
    height: 200px;
  }
  @media screen and (min-width: 1200px) {
    margin: 25px;
    width: 350px;
    height: 300px;
  }
`;

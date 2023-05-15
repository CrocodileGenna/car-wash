import styled from '@emotion/styled';
export const SECTION = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 15px 0 15px;
  color: black;
  // background: #dddcdd;
  @media screen and (min-width: 760px) {
    padding: 40px 20px;
  }
`;
export const TITLE_TEXT_DIV = styled.div`
  display: flex;
  margin: 0 0 10px 0;
`;
export const TITLE_ICON_IMG = styled.img`
  width: 40px;
  margin: 0 0 0 20px;
`;
export const TITLE_H1 = styled.h1`
  span {
    color: red;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 800;
`;

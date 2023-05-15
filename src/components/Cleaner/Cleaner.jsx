import {
  SECTION,
  TITLE_H2,
  TITLE_P,
  POSITION_IMG,
  IMG,
} from './Cleaner.styled';

import carpet_1 from './images/carpet_1.jpg';

import carpet_2 from './images/carpet_2.JPG';
export const Cleaner = ({ clickImg, open }) => {
  const chengeImg = e => {
    clickImg(e.target.src);
    open(true);
  };
  return (
    <>
      <SECTION>
        <TITLE_H2>
          <span>Х</span>
          імчистка
        </TITLE_H2>
        <TITLE_P>килимів</TITLE_P>
        <POSITION_IMG>
          <IMG onClick={chengeImg} src={carpet_1} alt="carpet_1" />
          <IMG onClick={chengeImg} src={carpet_2} alt="carpet_2" />
        </POSITION_IMG>
      </SECTION>
    </>
  );
};

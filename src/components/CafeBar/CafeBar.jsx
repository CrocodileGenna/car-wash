import {
  SECTION,
  TITLE_TEXT_DIV,
  TITLE_ICON_IMG,
  TITLE_H1,
  UL,
  LI,
  IMG,
} from './CafeBar.styled';
import svg_icon from './Images/cafe-bar-svgrepo-com.svg';
import cafe_1 from './Images/cafe_1.jpg';
import cafe_2 from './Images/cafe_2.jpg';
import cafe_3 from './Images/cafe_3.jpg';
import cafe_4 from './Images/cafe_4.jpg';
export const CafeBar = ({ clickImg, open }) => {
  const chengeImg = e => {
    clickImg(e.target.src);
    open(true);
  };
  return (
    <SECTION>
      <TITLE_TEXT_DIV>
        <TITLE_H1>
          <span>К</span>
          афе-бар
        </TITLE_H1>
        <TITLE_ICON_IMG src={svg_icon} alt="svg_icon" />
      </TITLE_TEXT_DIV>
      <UL>
        <LI>
          <IMG onClick={chengeImg} src={cafe_1} alt="cafe_1" />
        </LI>
        <LI>
          <IMG onClick={chengeImg} src={cafe_2} alt="cafe_2" />
        </LI>
        <LI>
          <IMG onClick={chengeImg} src={cafe_3} alt="cafe_3" />
        </LI>
        <LI>
          <IMG onClick={chengeImg} src={cafe_4} alt="cafe_4" />
        </LI>
      </UL>
    </SECTION>
  );
};

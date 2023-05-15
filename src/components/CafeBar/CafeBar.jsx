import {
  SECTION,
  TITLE_TEXT_DIV,
  TITLE_ICON_IMG,
  TITLE_H1,
} from './CafeBar.styled';
import svg_icon from './Images/cafe-bar-svgrepo-com.svg';
export const CafeBar = ({ clickImg, open }) => {
  return (
    <SECTION>
      <TITLE_TEXT_DIV>
        <TITLE_H1>
          <span>К</span>
          афе-бар
        </TITLE_H1>
        <TITLE_ICON_IMG src={svg_icon} alt="svg_icon" />
      </TITLE_TEXT_DIV>
    </SECTION>
  );
};

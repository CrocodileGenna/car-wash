import { SECTION, TITLE_H2, UL, LI, INFO_P, IMG } from './AddServices.styled';
import condition from './images/condition.jpg';
import electro from './images/electro.jpg';
import oil from './images/oil.jpg';
import stove from './images/stove.jpg';
import chassis from './images/chassis.jpg';
import brakes from './images/brakes.jpg';
export const AddSerwices = () => {
  return (
    <SECTION>
      <TITLE_H2>
        <span>С.</span>
        Т.О.
      </TITLE_H2>
      <UL>
        <LI>
          <INFO_P>Ремонт ходової</INFO_P>
          <IMG src={chassis} alt="chassis" />
        </LI>
        <LI>
          <INFO_P>Заміна рідин, оливи, фільтрів</INFO_P>
          <IMG src={oil} alt="oil" />
        </LI>
        <LI>
          <INFO_P>Послуги автоелектрика</INFO_P>
          <IMG src={electro} alt="electro" />
        </LI>
        <LI>
          <INFO_P>Кондиціонування</INFO_P>
          <IMG src={condition} alt="condition" />
        </LI>
        <LI>
          <INFO_P>Заміна гальмівної системи</INFO_P>
          <IMG src={brakes} alt="oil" />
        </LI>
        <LI>
          <INFO_P>Система опалення (пічка авто)</INFO_P>
          <IMG src={stove} alt="stove" />
        </LI>
      </UL>
    </SECTION>
  );
};

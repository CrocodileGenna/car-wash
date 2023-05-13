import { SECTION, TITLE_H2, IMG } from './AddServices.styled';

import chassis from './images/chassis.jpg';
export const AddSerwices = ({ clickImg, open }) => {
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
        <p>килимів</p>
        <div>
          <IMG onClick={chengeImg} src={chassis} alt="chassis" />
          <IMG onClick={chengeImg} src={chassis} alt="chassis" />
        </div>
      </SECTION>
    </>
  );
};

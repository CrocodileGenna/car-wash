import {
  SECTION,
  WASH_DIV,
  TITLE_H2,
  TABLE,
  LOGO_1,
} from './SectionWash.styled';
import logo from './images/Karcher-Black-Logo.webp';
export const SectionWash = () => {
  return (
    <SECTION>
      <LOGO_1 src={logo} alt="logo" />
      {/* <h1>Прайс автомийки</h1> */}
      <WASH_DIV>
        <TITLE_H2>ВНУТРІШНЄ ТА ЗОВНІШНЄ ПРИБИРАННЯ</TITLE_H2>
        <TABLE>
          <tr>
            <td>• Безконтактне миття</td>
            <td> - Ціна</td>
          </tr>
          <tr>
            <td>• Контактне миття</td>
            <td> - Ціна</td>
          </tr>
          <tr>
            <td>• Ручне миття</td>
            <td> - Ціна</td>
          </tr>
          <tr>
            <td>• Суха автомийка</td>
            <td> - Ціна</td>
          </tr>
        </TABLE>
      </WASH_DIV>
      <WASH_DIV>
        <TITLE_H2>ДОДАТКОВІ ПОСЛУГИ</TITLE_H2>
        <TABLE>
          <tr>
            <td>• Полірування фар</td>
            <td> - Ціна</td>
          </tr>
          <tr>
            <td>• Полірування кузова авто</td>
            <td> - Ціна</td>
          </tr>
          <tr>
            <td>• Відновлення фар</td>
            <td> - Ціна</td>
          </tr>
        </TABLE>
      </WASH_DIV>
    </SECTION>
  );
};

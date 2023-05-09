import {
  SECTION,
  WASH_DIV,
  TITLE_DIV,
  TITLE_POSITION_DIV,
  TITLE_H2,
  TITLE_P,
  TITLE_BLOCK_DIV,
  // TABLE,
  // LOGO_1,
} from './SectionWash.styled';
// import logo from './images/Karcher-Black-Logo.webp';
export const SectionWash = () => {
  return (
    <SECTION>
      {/* <LOGO_1 src={logo} alt="logo" /> */}
      <h1>
        <span>А</span>
        втомийка
      </h1>
      <WASH_DIV>
        <TITLE_DIV>
          <TITLE_POSITION_DIV>
            <TITLE_H2>Комплексна мийка</TITLE_H2>
            <TITLE_P>
              ЗОВНІШНЄ МИТТЯ, ВНУТРІШНЄ ВОЛОГЕ ПРИБИРАННЯ, КИЛИМКИ
            </TITLE_P>
          </TITLE_POSITION_DIV>
          <TITLE_BLOCK_DIV>
            <p>від</p>
            <p>200</p>
            <p>грн</p>
          </TITLE_BLOCK_DIV>
        </TITLE_DIV>
        {/* <ul>
          <li>
            <p>Безконтактне миття</p>
            <img src="" alt="" />
          </li>
          <li>
            <p>Контактне миття</p>
            <img src="" alt="" />
          </li>
          <li>
            <p>Ручне миття</p>
            <img src="" alt="" />
          </li>
          <li>
            <p>Суха автомийка</p>
            <img src="" alt="" />
          </li>
        </ul> */}
      </WASH_DIV>
      <WASH_DIV>
        {/* <TITLE_H2>ДОДАТКОВІ ПОСЛУГИ</TITLE_H2>
        <ul>
          <li>
            <p>Полірування фар</p>
            <img src="" alt="" />
          </li>
          <li>
            <p>Полірування кузова авто</p>
            <img src="" alt="" />
          </li>
          <li>
            <p>Відновлення фар</p>
            <img src="" alt="" />
          </li>
        </ul> */}
      </WASH_DIV>
    </SECTION>
  );
};

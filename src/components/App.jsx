import {
  GlobalStyle,
  HEADER,
  UP_DIV,
  NAV_UL,
  // LOGO,
  SECTION,
  INFO_DIV,
  INFRAME,
  MAP_IMG,
  FOOTER,
} from './App.styled';
// import images from './images/PikPng.com_bmw-png_297886.png';
import map from './images/photo_2023-05-04_15-50-41.jpg';
export function App() {
  return (
    <GlobalStyle>
      <HEADER>
        <UP_DIV>
          {/* <LOGO src={images} alt="images" /> */}
          {/* <h2>Автомийка</h2> */}
          <h1>«БУМЕР»</h1>
          <p>☎: -99-09-09</p>
        </UP_DIV>
        <NAV_UL>
          <li>
            <a href="/">Автомийка</a>
          </li>
          <li>
            <a href="/">Паркінг</a>
          </li>
          <li>
            <a href="/">С.Т.О.</a>
          </li>
          <li>
            <a href="/">Кафе-бар.</a>
          </li>
        </NAV_UL>
      </HEADER>
      <SECTION>
        <INFO_DIV>
          <b>Про нас.</b>
          <p>
            Наша команда працює <span>НАПОВНУ</span> щоб ви могли економити свій
            час, а якість наданих послуг точно не залишить вас байдужим.
          </p>
          <p>Ми знаходимось за адрессою:</p>
          <b>пр-к Шахтобудівників 5-А.</b>
          <span>(одразу за пенсійним фондом)</span>
        </INFO_DIV>
        <MAP_IMG src={map} alt="map" />
        <INFRAME
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1868.43347741375!2d35.84111136890288!3d48.52625626474995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1683100543021!5m2!1suk!2sua"
          allowfullscreen=""
          loading="lazy"
          title="map"
          referrerpolicy="no-referrer-when-downgrade"
        ></INFRAME>
      </SECTION>
      <FOOTER>
        <h1>«БУМЕР»</h1>
        <p>☎: -99-09-09</p>
      </FOOTER>
    </GlobalStyle>
  );
}

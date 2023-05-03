import {
  GlobalStyle,
  LOGO,
  HEADER,
  TITLE_DIV,
  SECTION,
  INFO_DIV,
  INFRAME,
  FOOTER,
} from './App.styled';
import images from './images/PikPng.com_bmw-png_297886.png';
export function App() {
  return (
    <GlobalStyle>
      <HEADER>
        <LOGO src={images} alt="images" />
        <TITLE_DIV>
          {/* <h2>Автомийка</h2> */}
          <h1>«БУМЕР»</h1>
        </TITLE_DIV>
        <p>☎: -99-09-09</p>
      </HEADER>
      <SECTION>
        <INFO_DIV>
          <h3>Асортимент наших послуг:</h3>
          <ul>
            <li>
              <span>✔</span> Автомийка всіх видві.
            </li>
            <li>
              <span>✔</span> Цілодобовий паркінг.
            </li>
            <li>
              <span>✔</span> С.Т.О.
            </li>
            <li>
              <span>✔</span> Кафе-бар.
            </li>
          </ul>
        </INFO_DIV>
        <INFRAME
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1868.43347741375!2d35.84111136890288!3d48.52625626474995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1683100543021!5m2!1suk!2sua"
          width="300px"
          height="300px"
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

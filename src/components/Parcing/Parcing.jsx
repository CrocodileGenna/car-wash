// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import {
  SECTION,
  TITLE_TEXT_DIV,
  TITLE_H1,
  TITLE_ICON_IMG,
  TITLE_P,
  IMG,
  IMG_DIV,
} from './Parcing.styled';
import parking_1 from './images/parking_1.jpg';
import svg_icon from './images/parking-meter-parked-car-metered-parking-paid-parking-svgrepo-com.svg';
export const Parcing = ({ clickImg, open }) => {
  const chengeImg = e => {
    clickImg(e.target.src);
    open(true);
  };
  return (
    <>
      <SECTION>
        <IMG_DIV>
          <p>
            місяць
            <span>500грн</span>
          </p>
        </IMG_DIV>
        <TITLE_TEXT_DIV>
          <div>
            <TITLE_H1>
              <span>П</span>аркінг
            </TITLE_H1>
            <TITLE_P>20 грн. за добу</TITLE_P>
          </div>
          <TITLE_ICON_IMG src={svg_icon} alt="svg_icon" />
        </TITLE_TEXT_DIV>
        <div>
          <IMG
            onClick={chengeImg}
            src={parking_1}
            alt="павлоград парковка бумер"
          />
        </div>
      </SECTION>
    </>
  );
};

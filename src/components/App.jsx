import { Header } from 'components/Header/Header';
import { SectionWash } from './Wash/SectionWash';
import { AddSerwices } from './AdditionalServices/AddServices';
import { Footer } from './Footer/Footer';
import { UP_BUTTON } from './App.styled';

export const App = () => {
  const scrollUp = () => {
    document.documentElement.scrollTop = 0;
  };
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  };
  return (
    <>
      <Header />
      <SectionWash />
      <AddSerwices />
      <Footer />
      <UP_BUTTON id="scrollToTopButton" onClick={scrollUp}>
        ⇑
      </UP_BUTTON>
    </>
  );
};

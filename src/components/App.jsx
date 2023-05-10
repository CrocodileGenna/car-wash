import { Header } from 'components/Header/Header';
import { SectionWash } from './Wash/SectionWash';
import { AddSerwices } from './AdditionalServices/AddServices';
import { Footer } from './Footer/Footer';
export const App = () => {
  return (
    <>
      <Header />
      <SectionWash />
      <AddSerwices />
      <Footer />
    </>
  );
};

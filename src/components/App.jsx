import { Header } from 'components/Header/Header';
import { SectionWash } from './Wash/SectionWash';
import { AddSerwices } from './AdditionalServices/AddServices';
export const App = () => {
  return (
    <>
      <Header />
      <SectionWash />
      <AddSerwices />
    </>
  );
};

import Header from '../components/Header/Header';
import DividerText from '../components/Divider/Divider';
import PortfolioItem from '../components/PortfolioComponents/PorfolioItem';
import Banner from '../components/Banner/Banner';
import ContactForm from '../components/ContactForm/ContactForm';
import { Box, styled } from '@mui/material';

const Box35padding = styled(Box)({
  paddingTop: '35px',
  maxWidth: '90%',
  margin: '0 auto',
  textAlign: 'center',
});

const text = {
  svatby: 
    'Velmi ráda se stanu součástí Vašeho neopakovatelného příběhu. Zaujala Vás moje práce? Koukněte do portfolia a v případě zájmu mě kontaktujte. Ke každé svatbě přistupuji individuálně!',
  miminka: 
    'Miminka fotím ideálně do 14 dnů od jejich narození. Focení probíhá z pohodlí Vašeho domova, nebo ve specializovaném ateliéru v Pardubicích nebo Hradci Králové. Zda vyberete stylizované fotografie nebo přirozené tzv. Lifestyle, nechám na Vás.',
  deti: 'Focení dětí je ideální od věku cca 4 měsíců, kdy už vydrží na bříšku, až do dospělosti. Každé období má své kouzlo.',
  rodinky: 'Tady platí dvakrát tolik, že jediná fotka, které budete litovat je ta, kterou nemáte! Na rodinné focení je vhodná doba úplně vždy. Přijít můžete s celou rodinkou, sourozencem nebo třeba s babičkou.',
}

const HomePage = () => {
   return (
    <>
      <Header minHeight="750px" />
      <Banner />
      <DividerText message="co fotím" />
      <Box35padding>
        <PortfolioItem 
          direction="" 
          name="svatby"
          type="svatby"
          image="/images/homePageImages/1.jpg" 
          text={text.svatby}
        />
        <PortfolioItem 
          direction="row-reverse" 
          name="miminka"
          type="miminka"
          image="/images/homePageImages/3.jpg" 
          text={text.miminka}
        />
        <PortfolioItem 
          direction="" 
          name="děti"
          type="detiarodinky"
          image="/images/homePageImages/2.jpg" 
          text={text.deti}
        />
        <PortfolioItem 
          direction="row-reverse" 
          name="rodinky"
          type="detiarodinky"
          image="/images/homePageImages/4.jpg" 
          text={text.rodinky}
        />
      </Box35padding>
      <DividerText message="kontakt" />
      <Box35padding>
        <ContactForm />
      </Box35padding>
    </>
  );
}

export default HomePage;

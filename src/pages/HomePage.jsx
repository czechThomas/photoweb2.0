import Header from '../components/Header/Header';
import DividerText from '../components/Divider/Divider';
import PortfolioItem from '../components/PortfolioComponents/PorfolioItem';
import Banner from '../components/Banner/Banner';
import ContactForm from '../components/ContactForm/ContactForm';
import { Box } from '@mui/material';
import { styleBox35padding } from '../CustomStyles';

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
      <Box sx={styleBox35padding}>
        <PortfolioItem 
          direction="" 
          name="svatby"
          type="svatby"
          image="/images/svatba/svatba_uvod_fit.jpg" 
          text={text.svatby}
        />
        <PortfolioItem 
          direction="row-reverse" 
          name="miminka"
          type="miminka"
          image="/images/babies/miminka_uvod.jpg" 
          text={text.miminka}
        />
        <PortfolioItem 
          direction="" 
          name="děti"
          type="detiarodinky"
          image="/images/kids/Deti_uvod.jpg" 
          text={text.deti}
        />
        <PortfolioItem 
          direction="row-reverse" 
          name="rodinky"
          type="detiarodinky"
          image="/images/rodinky/rodinky_uvod.jpg" 
          text={text.rodinky}
        />
      </Box>
      <DividerText message="kontakt" />
      <Box sx={styleBox35padding}>
        <ContactForm />
      </Box>
    </>
  );
}

export default HomePage;

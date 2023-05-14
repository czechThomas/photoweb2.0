import { Box, Button, Typography, Grid, styled } from '@mui/material';
import MinorHeader from '../components/Header/MinorHeader';
import PriceItem from '../components/PriceList/PriceItem';

const InfoBox = styled(Box)({
  paddingTop: '125px',
  maxWidth: '90%',
  margin: '0 auto',
  textAlign: 'center',
  minHeight: '55vh',
});

const PortfolioButton = styled(Button)({
  marginTop: '20px',
  width: '250px',
});

const rodinkyAdeti = {
  text: (
    <>
      <p>Děti, páry, těhulky, portréty</p> 
      <p>10 ks upravených fotografií v elektronické podobě</p>
      <p>Soukromá online galerie</p>
      <p>1 hodina focení </p>
    </>
  ),
  price: (
    <>
      <p>Exteriér: 2.400,-</p>
      <p>Ateliér: 3.400,-</p>
    </>
  ),
};

const miminka = {
  text: (
    <>
      <p>Lifestylové nebo stylizované focení</p>
      <p>2-4 hodiny focení</p>
      <p>Soukromá online galerie</p>
      <p>10ks upravených fotografií v elektronické podobě</p>
    </>
  ),
  price: (
    <>
      <p>Focení u vás doma: 2.900,-</p>
      <p>Ateliér: 3.900,-</p>
    </>
  ),
};

const svatby = {
  text: (
    <>
      <p>V případě Vašeho zájmu o zaslání cenové nabídky mi prosím napište zprávu společně s termínem a místem konání svatby.</p>
    </>
  ),
  price: (
    <>
      <p>
        Svatební focení začíná na
        <br />částce 13.900,-
      </p>
    </>
  ),
};



const PriceList = () => {
  return(
    <>
      <InfoBox>
        <MinorHeader minHeight="40px"/>
        <Grid container justifyContent="center" >
          <Grid item>
            <PriceItem title="Rodinky a děti" text={rodinkyAdeti.text} price={rodinkyAdeti.price}/>
          </Grid>
          <Grid item>
            <PriceItem title="miminka" text={miminka.text} price={miminka.price}/>
          </Grid>
          <Grid item>
            <PriceItem title="svatby" text={svatby.text} price={svatby.price}/>
          </Grid>
        </Grid>
        <Box sx={{ paddingTop: '20px' }}>
          <Typography variant="body1">Fotografie si vybíráte z náhledové online galerie.</Typography>
          <br />
          <Typography variant="body1">Každá další fotografie navíc + 200kč</Typography>
          <br />
          <Typography variant="body1">Cesta do 15km od Holic zdarma, poté + 9kč/km</Typography>
          <br />
          <Typography variant="body1">Ceník je platný od 01.04.2023 </Typography>
        </Box>
        <PortfolioButton variant='contained' href="/kontakt">
            Napište mi
        </PortfolioButton>
      </InfoBox>
      <Box sx={{ height: '70px' }}/>
    </>
  );
};

export default PriceList;

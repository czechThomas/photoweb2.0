import { Box, Typography, Grid } from '@mui/material';
import MinorHeader from '../components/Header/MinorHeader';
import PriceItem from '../components/PriceList/PriceItem';
import { styleBox, PortfolioButton } from '../CustomStyles';

const svatby = {
  text: (
    <>
      <p>Ke každému focení přistupuji individuálně.</p>
      <p>V případě Vašeho zájmu o zaslání cenové nabídky mi prosím napište zprávu společně s termínem a místem konání svatby.</p>
    </>
  ),
  price: "začíná na 13.900 Kč",
};

const miminka = {
  text: (
    <>
      <p>Lifestylové nebo stylizované focení</p>
      <p>10ks upravených fotografií v elektronické podobě</p>
      <p>2-4 hodiny </p>
    </>
  ),
  price: (
    <>
      <p>Focení u vás doma: 2.900 Kč</p>
      <p>Ateliér: 3.900 Kč</p>
    </>
  ),
};

const deti = {
  text: (
    <>
      <p>10 ks upravených fotografií v elektronické podobě</p>
      <p>1 hodina focení </p>
    </>
  ),
  price: (
    <>
      <p>Exteriér: 2.400 Kč</p>
      <p>Ateliér: 3.400 Kč</p>
    </>
  ),
};

const rodiny = {
  text: (
    <>
      <p>Páry, těhulky, portréty</p> 
      <p>10 ks upravených fotografií v elektronické podobě</p>
      <p>1 hodina focení </p>
    </>
  ),
  price: (
    <>
      <p>Exteriér: 2.400 Kč</p>
      <p>Ateliér: 3.400 Kč</p>
    </>
  ),
};

const PriceList = () => {
  return(
    <>
      <Box sx={styleBox}>
        <MinorHeader minHeight="40px"/>
        <Grid container justifyContent="center" >
          <Grid item>
            <PriceItem title="svatby" text={svatby.text} price={svatby.price}/>
          </Grid>
          <Grid item>
            <PriceItem title="miminka" text={miminka.text} price={miminka.price}/>
          </Grid>
          <Grid item>
            <PriceItem title="děti" text={deti.text} price={deti.price}/>
          </Grid>
          <Grid item>
            <PriceItem title="rodinky" text={rodiny.text} price={rodiny.price}/>
          </Grid>
        </Grid>
        <Box sx={{ paddingTop: '70px' }}>
          <Typography variant="h6">Fotografie si vybíráte z náhledové online galerie.</Typography>
          <br />
          <Typography variant="h6">Každá další fotografie navíc + 200kč</Typography>
          <br />
          <Typography variant="h6">Cesta do 15km od Holic zdarma, poté + 9kč/km</Typography>
          <br />
          <Typography variant="h6">Ceník je platný od 01.04.2023  </Typography>
        </Box>
        <PortfolioButton variant='contained' href="/kontakt">
            Napište mi
        </PortfolioButton>
      </Box>
    </>
  );
};

export default PriceList;

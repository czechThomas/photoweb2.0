import { Box, Grid, IconButton, styled } from '@mui/material';
import MinorHeader from '../components/Header/MinorHeader';
import PortfolioButton from '../components/PortfolioComponents/PortfolioButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useWindow } from '../Context';

const PortfolioBox = styled(Box)({
  paddingTop: '125px',
  paddingBottom: '25px',
  margin: '0 auto',
  textAlign: 'center',
});

const Portfolio = () => {
  const { windowSize } = useWindow();
    return(
        <>
          <PortfolioBox sx={{ maxWidth: windowSize >= 1150 ? '1100px' : '80%'}}>
            <MinorHeader minHeight="90px" title="Portfolio"/>
            <Grid container spacing={1} direction={windowSize >= 1150 ? 'row' : 'column'}>
              <Grid item xs={3}>
                <PortfolioButton image="portfolioHomePage/Portfolio_wedding.jpg" title="svatby" path="/portfolio/gallery/svatby"/>
              </Grid>
              <Grid item xs={3}>
                <PortfolioButton image="portfolioHomePage/Portfolio_babies.jpg" title="miminka" path="/portfolio/gallery/miminka"/>
              </Grid>
              <Grid item xs={3}>
                <PortfolioButton image="portfolioHomePage/Portfolio_kidsAndFamily.jpg" title="děti a rodinky" path="/portfolio/gallery/detiarodinky"/>
              </Grid>
              <Grid item xs={3}>
                <PortfolioButton image="portfolioHomePage/Portfolio_pregnant.jpg" title="těhotenské focení" path="/portfolio/gallery/tehotenske"/>
              </Grid>
            </Grid>
          </PortfolioBox>
          <Box sx={{ color: 'white', textAlign: 'center' }}>
            <IconButton aria-label="Facebook" onClick={() => window.open('https://www.facebook.com/fotofojtova')} >
              <FacebookIcon sx={{ fontSize: '80px' }} />
            </IconButton>
            <IconButton aria-label="Instagram" onClick={() => window.open('https://www.instagram.com/lucie_fojtova__fotografka')}>
                <InstagramIcon sx={{ fontSize: '80px' }} />
            </IconButton>
          </Box>
          <Box sx={{ height: '200px' }}/>
        </>
    );
};

export default Portfolio;
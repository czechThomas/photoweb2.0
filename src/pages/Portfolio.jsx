import { Box, Grid, IconButton } from '@mui/material';
import MinorHeader from '../components/Header/MinorHeader';
import PortfolioButton from '../components/PortfolioComponents/PortfolioButton';
import { stylePortfolioBox } from '../CustomStyles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useWindow } from '../Context';

const Portfolio = () => {
  const { windowSize } = useWindow();
    return(
        <>
          <Box sx={{...stylePortfolioBox, maxWidth: windowSize >= 1050 ? '1100px' : '80%'}}>
            <MinorHeader minHeight="90px" title="Portfolio"/>
            <Grid container spacing={1} direction={windowSize >= 1050 ? 'row' : 'column'}>
              <Grid item xs={3}>
                <PortfolioButton image="svatba/svatba_uvod_fit.jpg" title="svatby" path="/portfolio/gallery/svatby"/>
              </Grid>
              <Grid item xs={3}>
                <PortfolioButton image="babies/miminka_uvod.jpg" title="miminka" path="/portfolio/gallery/miminka"/>
              </Grid>
              <Grid item xs={3}>
                <PortfolioButton image="kids/Deti_uvod.jpg" title="děti a rodinky" path="/portfolio/gallery/detiarodinky"/>
              </Grid>
              <Grid item xs={3}>
                <PortfolioButton image="pregnant/DSC_3512-Edit_fit.jpg" title="těhotenské focení" path="/portfolio/gallery/tehotenske"/>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ color: 'white', textAlign: 'center' }}>
            <IconButton aria-label="Facebook" onClick={() => window.open('https://www.facebook.com/fotofojtova')} >
              <FacebookIcon sx={{ fontSize: '80px' }} />
            </IconButton>
            <IconButton aria-label="Instagram" onClick={() => window.open('https://www.instagram.com/lucie_fojtova__fotografka')}>
                <InstagramIcon sx={{ fontSize: '80px' }} />
            </IconButton>
          </Box>
        </>
    );
};

export default Portfolio;
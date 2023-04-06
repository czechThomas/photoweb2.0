import { Box, Grid } from '@mui/material';
import MinorHeader from '../components/Header/MinorHeader';
import PortfolioButton from '../components/PortfolioComponents/PortfolioButton';
import { stylePortfolioBox } from '../CustomStyles';

const Portfolio = ({ windowSize }) => {
    return(
        <>
          <Box sx={{...stylePortfolioBox, maxWidth: windowSize >= 1050 ? '1100px' : '80%'}}>
            <MinorHeader minHeight="90px" title="Portfolio"/>
            <Grid container spacing={1} direction={windowSize >= 1050 ? 'row' : 'column'}>
              <Grid item xs={6}>
                <PortfolioButton windowSize={windowSize} image="svatba/svatba_uvod_fit.jpg" title="svatby" path="/portfolio/gallery/svatby"/>
              </Grid>
              <Grid item xs={6}>
                <PortfolioButton windowSize={windowSize} image="babies/miminka_uvod.jpg" title="miminka" path="/portfolio/gallery/miminka"/>
              </Grid>
              <Grid item xs={6}>
                <PortfolioButton windowSize={windowSize} image="kids/Deti_uvod.jpg" title="děti" path="/portfolio/gallery/deti"/>
              </Grid>
              <Grid item xs={6}>
                <PortfolioButton windowSize={windowSize} image="rodinky/rodinky_uvod.jpg" title="rodinky" path="/portfolio/gallery/rodinky"/>
              </Grid>
              <Grid item xs={12}>
                <PortfolioButton windowSize={windowSize} image="pregnant/DSC_3512-Edit_fit.jpg" title="těhotenské focení" path="/portfolio/gallery/tehotenske"/>
              </Grid>
            </Grid>
          </Box>
        </>
    );
};

export default Portfolio;
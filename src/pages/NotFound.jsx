import { Box, IconButton, Typography, styled } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MinorHeader from '../components/Header/MinorHeader';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const NotFoundBox = styled(Box)({
  paddingTop: '125px',
  paddingBottom: '25px',
  margin: '0 auto',
  textAlign: 'center',
});

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 5000);
  });

  return (
    <>
          <NotFoundBox>
            <MinorHeader minHeight="90px" title="Oops.. 404"/>
            <Typography variant="h4" sx={{ paddingBottom: '50px' }}>Stránka nebyla nenalezena</Typography>
            <Typography variant="body1" sx={{ paddingBottom: '350px' }}>Za okamžik budete přesměrováni na hlavní stránku</Typography>
          </NotFoundBox>
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
  )
}

export default NotFound;

import { Typography, Box, styled, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterBox = styled(Box)({
    backgroundColor: '#262626',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingBottom: '20px',
});

const WaveBox = styled(Box)({
    position: 'relative',
    top: '0',
    left: '0',
    width: '100%',
    overflow: 'hidden',
});

const Footer = () => {
    return(
        <>
            <Box style={{ height: '20px' }}/>
            <FooterBox> 
                <WaveBox>
                    <svg 
                        data-name="Layer 1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 1200 120" 
                        preserveAspectRatio="none"
                        style={{ display: 'block', width: 'calc(191% + 1.3px)', height: '168px' }}
                    >
                            <path 
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                                style={{ fill: '#FFFFFF' }}
                            />
                    </svg>
                    
                </WaveBox>
                <Box sx={{ color: 'white', textAlign: 'center' }}>
                    <Typography variant='body1'>
                        Buďme v kontaktu, sledujte mě na Instagramu nebo Facebooku
                    </Typography>
                    <IconButton aria-label="Facebook" onClick={() => window.open('https://www.facebook.com/fotofojtova')} sx={{ color: 'white'}}>
                        <FacebookIcon fontSize="large" />
                    </IconButton>
                    <IconButton aria-label="Instagram" onClick={() => window.open('https://www.instagram.com/lucie_fojtova__fotografka')} sx={{ color: 'white'}}>
                        <InstagramIcon fontSize="large" />
                    </IconButton>
                    <Typography sx={{ color: 'grey', padding: '10px' }}>Lucie Fojtová / 2023</Typography>
                    <Link style={{ color: '#FFFFFF' }} to="/terms">Obchodní podmínky</Link>
                </Box>
            </FooterBox>
        </>
    );
}

export default Footer;
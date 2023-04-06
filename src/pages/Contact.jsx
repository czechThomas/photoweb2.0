import { 
  Box, 
  IconButton,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MinorHeader from '../components/Header/MinorHeader';
import { styleBox75width } from '../CustomStyles';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactInfo from '../components/ContactForm/ContactInfo';
import TaCText from '../components/ContactForm/TaCText';
import { Colors, PortfolioButton } from '../CustomStyles';

const data = {
  adresa: {
    title: 'Adresa ateliéru',
    text: 'Hradec Králové, 500 12',
  },
  kontakt: {
    title: 'Kontakt',
    text: (
      <div>
        <h2>Lucie Fojtová</h2>
        IČO: 14032708
      <br />
      <br />
        tel: +420 777 816 899
      <br />
      <br />
        luci.fojtova@seznam.cz
      </div>
    ),
  },
  navigace: {
    title: 'Jak se ke mě dostanete',
    text: 'Najdete mě v Hradci Králové...',
  },
  socialMedia: {
    title: 'Sociální sítě',
    text: (
      <div>
        <IconButton aria-label="Facebook" onClick={() => window.open('https://www.facebook.com/fotofojtova')} sx={{ color: Colors.dark }}>
            <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="Instagram" onClick={() => window.open('https://www.instagram.com/lucie_fojtova__fotografka')} sx={{ color: Colors.dark }}>
            <InstagramIcon fontSize="large" />
        </IconButton>
      </div>
),
  },
};

const Contact = () => {
    const [open, setOpen] = useState(false);

    return(
        <Box sx={styleBox75width}>
          <MinorHeader minHeight="90px" title="Kontakt"/>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '70px', justifyContent: 'center', paddingBottom: '70px' }}>
              <ContactInfo title={data.adresa.title} text={data.adresa.text} />
              <ContactInfo title={data.kontakt.title} text={data.kontakt.text} />
              <ContactInfo title={data.navigace.title} text={data.navigace.text} />
              <ContactInfo title={data.socialMedia.title} text={data.socialMedia.text} />
          </Box>
          <ContactForm />
          <Box sx={{ height: '30px' }}/>
          <Typography variant="body1">Objednáním se na focení souhlasíte s obchodními podmínkami.</Typography>
          <PortfolioButton variant='contained' onClick={() => setOpen(true)}>Obchodní podmínky</PortfolioButton>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Obchodní podmínky</DialogTitle>
            <DialogContent dividers={true}>
              <DialogContentText
                id="scroll-dialog-description"
              >
                <TaCText />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button sx={{ color: Colors.hover }} onClick={() => setOpen(false)}>Souhlasím</Button>
            </DialogActions>
          </Dialog>
          <Box sx={{ paddingTop: '30px' }} >
            <Box sx={{ backgroundColor: Colors.light , color: Colors.secondary , padding: '10px', marginBottom: '-40px' }}>
              <Typography sx={{ textTransform: 'uppercase' }} variant='h5'>Orientační mapa</Typography>
            </Box>
            <iframe title='Location' style={{ border: 'none', padding: '50px 0' }} src="https://frame.mapy.cz/s/keducahosu" width="100%" height="500" />
          </Box>
        </Box>
    );
};

export default Contact;

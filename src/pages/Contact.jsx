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
    text: 'Fotíme v Pardubicích nebo Hradci Králové',
  },
  kontakt: {
    title: 'Kontakt',
    text: (
      <div>
        Lucie Fojtová
      <br />
      <br />
        IČO: 14032708
      <br />
      <br />
        luci.fojtova@seznam.cz
      </div>
    ),
  },
  socialMedia: {
    title: 'Buďme v kontaktu',
    text: (
      <div>
        <IconButton aria-label="Facebook" onClick={() => window.open('https://www.facebook.com/fotofojtova')} sx={{ color: Colors.dark }}>
            <FacebookIcon sx={{ fontSize: '60px' }} />
        </IconButton>
        <IconButton aria-label="Instagram" onClick={() => window.open('https://www.instagram.com/lucie_fojtova__fotografka')} sx={{ color: Colors.dark }}>
            <InstagramIcon sx={{ fontSize: '60px' }}  />
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
        </Box>
    );
};

export default Contact;

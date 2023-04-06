import { Box } from '@mui/material';
import { PortfolioButton, FormTextField } from '../../CustomStyles';

const ContactForm = () => {
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            <FormTextField id="outlined-basic" label="Jméno a Příjmení" fullWidth required />
            <FormTextField id="outlined-basic" label="Email" fullWidth required />
            <FormTextField id="outlined-multiline-static" label="Vaše zpráva" fullWidth multiline rows={8} required />
            <PortfolioButton variant='contained'>
                    Odeslat zprávu
            </PortfolioButton>   
        </Box>
    );
};

export default ContactForm;
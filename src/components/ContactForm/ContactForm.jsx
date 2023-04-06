import { useRef, useState } from 'react';
import { Box, Input, styled } from '@mui/material';
import emailjs from '@emailjs/browser';
import { FormTextField, Colors } from '../../CustomStyles';

const InputButton = styled(Input)({
    marginTop: '20px',
    width: '250px',
    color: Colors.secondary,
    border: '0.5px solid',
    borderColor: Colors.navbar,
    backgroundColor: Colors.primary,
    transition: '0.7s',
    '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
        backgroundColor: Colors.primary,
        transition: '0.7s',
    }
});

const ContactForm = () => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8hgpaeg', 'template_7g06df7', form.current, 'wBwLhMg24QBp3IbkY')
        .then((result) => {
            console.log(result.text);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <form ref={form} onSubmit={sendEmail}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                <FormTextField
                    id="outlined-basic"
                    label="Jméno a Příjmení"
                    type="text"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    required
                />
                <FormTextField
                    id="outlined-basic"
                    label="Email"
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                />
                <FormTextField
                    id="outlined-basic"
                    label="Telefonní číslo"
                    type="text"
                    name="user_phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                />
                <FormTextField
                    id="outlined-multiline-static"
                    label="Vaše zpráva"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth
                    multiline
                    rows={8}
                    required
                />
                <InputButton type="submit" value="Odeslat zprávu"/>
            </Box>
        </form>
    );
};

export default ContactForm;
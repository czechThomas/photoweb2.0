import { useEffect } from 'react';
import { Box } from "@mui/material";
import MinorHeader from '../components/Header/MinorHeader';
import TaCText from '../components/ContactForm/TaCText';

const styleBox75width = {
    paddingTop: '125px',
    maxWidth: '75%',
    margin: '0 auto',
    textAlign: 'center',
    minHeight: '55vh',
};

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box sx={{...styleBox75width, textAlign: 'left' }}>
        <MinorHeader minHeight="90px" title="Obchodní podmínky"/>
        <TaCText />
      </Box>
    </>
  )
}

export default TermsAndConditions;


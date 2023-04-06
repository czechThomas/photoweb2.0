import { Box } from "@mui/material";
import MinorHeader from '../components/Header/MinorHeader';
import TaCText from '../components/ContactForm/TaCText';
import { styleBox75width } from '../CustomStyles';

const TermsAndConditions = () => {
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


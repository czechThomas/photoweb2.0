import { Box, Typography } from "@mui/material";
import { Colors } from "../../CustomStyles";

const ContactInfo = ({ title, text }) => {
  return (
    <Box sx={{ width: '400px', minHeight: '70px', textAlign: 'center' }}>
      <Box sx={{ backgroundColor: Colors.light , color: Colors.secondary , padding: '10px' }}>
        <Typography sx={{ textTransform: 'uppercase' }} variant='h5'>{title}</Typography>
      </Box>
      <Box sx={{ paddingTop: '20px' }}>
        {text}
      </Box>
    </Box>
  )
};

export default ContactInfo;


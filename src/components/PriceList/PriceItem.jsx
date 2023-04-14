import { Box, Typography } from "@mui/material";
import { Colors } from "../../CustomStyles";

const PriceItem = ({ title, text, price }) => {
  return (
    <Box
      sx={{ 
        width: '300px',
        textAlign: 'center',
        margin: '20px',
        }}
      >
      <Box sx={{ backgroundColor: Colors.light , color: Colors.secondary , padding: '10px', borderRadius: '5px' }}>
        <Typography sx={{ textTransform: 'uppercase' }} variant='h5'>{title}</Typography>
      </Box>
      <Box sx={{ border: '2px solid', borderColor: Colors.light, borderRadius: '5px', marginTop: '10px' }}>
        <Box sx={{ padding: '20px', minHeight: '170px' }}>
          {text}
        </Box>
        <Box sx={{ padding: '1px', backgroundColor: Colors.light, minHeight: '120px' }}>
          {price}
        </Box>
      </Box>
    </Box>
  )
}

export default PriceItem;

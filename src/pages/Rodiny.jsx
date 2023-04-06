import { Box, Typography } from '@mui/material';
import { PortfolioButton, PortfolioBox, styleBox35padding } from '../CustomStyles';
import MinorHeader from '../components/Header/MinorHeader';

const Rodiny = () => {
  return (
    <>
      <Box sx={styleBox35padding}>
        <MinorHeader minHeight="90px" title="Rodinné fotografování"/>
        <PortfolioBox sx={{ flexDirection: 'row-reverse', paddingBottom: '50px' }}>
            <Box sx={{ width: '500px' }}>
                <img alt="jmeno" src="/images/rodinky/DSC_0237_cb.jpg" style={{ width: '100%', height: '500px', objectFit: 'cover' }}/>
            </Box>
            <Box sx={{ width: '500px', textAlign: 'center' }}>
                <Typography variant='body1' sx={{ paddingTop: '15px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur, laudantium harum nobis vero accusamus, omnis, quo suscipit recusandae dolorem possimus repellat ex! Accusantium ipsa ea aliquam impedit delectus animi?
                </Typography>
                <PortfolioButton variant='contained' href="/kontakt">
                    Chci fotografie
                </PortfolioButton>
            </Box>
        </PortfolioBox>
        <Box>
          <Typography variant='h3'>Podrobnější informace</Typography>
          <Typography variant='body1' sx={{ paddingTop: '15px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur, laudantium harum nobis vero accusamus, omnis, quo suscipit recusandae dolorem possimus repellat ex! Accusantium ipsa ea aliquam impedit delectus animi?
          </Typography>
          <PortfolioBox>
              <img alt="jmeno" src="/images/rodinky/DSC_2959-Edit.jpg" style={{ width: '100%', height: '350px', objectFit: 'cover' }}/>
          </PortfolioBox>
          <PortfolioButton variant='contained' href='/kontakt'>
              Chci fotografie
          </PortfolioButton>
        </Box>
      </Box>
    </>
  )
}

export default Rodiny;
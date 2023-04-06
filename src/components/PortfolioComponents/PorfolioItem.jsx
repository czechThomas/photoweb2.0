import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PortfolioTypography, PortfolioButton, PortfolioBox } from '../../CustomStyles';

const PortfolioItem = ({ name, type, direction, image, text }) => {
    const navigate = useNavigate();

    return(
        <PortfolioBox sx={{ flexDirection: direction }}>
            <Box sx={{ width: '500px', cursor: 'pointer' }}>
                <img alt="jmeno" src={image} style={{ width: '100%', height: '350px', objectFit: 'contain' }} onClick={() => navigate(`/informace?type=${type}`)}/>
            </Box>
            <Box sx={{ width: '500px', textAlign: 'center' }}>
                <PortfolioTypography variant='h5'>{name}</PortfolioTypography>
                <Typography variant='body1' sx={{ paddingTop: '15px' }}>
                    {text}
                </Typography>
                <PortfolioButton variant='contained' href={`/informace?type=${type}`}>
                    Více informací
                </PortfolioButton>
            </Box>
        </PortfolioBox>
    );
};

export default PortfolioItem;
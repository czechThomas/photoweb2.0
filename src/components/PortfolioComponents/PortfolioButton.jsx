import { Button, styled, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



const PortfolioTypography = styled(Typography)({
    fontStyle: 'oblique', 
    fontWeight: 'bold', 
    fontSize: '300%',
    textShadow: '1px 2px 1px grey',
    color: 'white',
})

const PortfolioButton = ({ windowSize, image, title, path }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const ImageButton = styled(Button)({
    width: '270px',
    height: '400px',
    backgroundImage: `url(/images/${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    filter: 'grayscale(100%)',
    '&:hover': {
        filter: 'none',
    }
});

  if (windowSize >= 1050) {
    return (
      <ImageButton onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => navigate(path)}>
        {hover && <PortfolioTypography>{title}</PortfolioTypography>}
      </ImageButton>
    )
  } else {
    return (
      <ImageButton sx={{ filter: 'none' }} component={Link} to={path}>
        <PortfolioTypography>{title}</PortfolioTypography>
      </ImageButton>
    )
  }
};

export default PortfolioButton;

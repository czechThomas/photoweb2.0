import { Button, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)({
  backgroundColor: '#FFFFFF',
  width: '100%',
  color: 'black',
  fontSize: 18,
  '&:hover, :focus': {
    backgroundColor: '#E1B653',
  },
});

const SingleMenuButton = ({ children, isActive }) => {
  const child = children;
  const route = child.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return (
    <Box>
      <StyledButton
        LinkComponent={Link}
        to={{ search: `?type=${route}` }}
        sx={{ backgroundColor: isActive ? '#E1B653' : 'white' }}
      >
        {children}
      </StyledButton>
    </Box>
  );
};

export default SingleMenuButton;

import { Box, styled } from '@mui/material';
import ItemOfNav from './ItemOfNav';

const LinkBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '50px',
  marginRight: '50px',
});

const ClasicMenu = () => { 
  return (
      <LinkBox>
        <ItemOfNav />
      </LinkBox>
  );
};

export default ClasicMenu;
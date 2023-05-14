import { Colors, DimensionData } from '../../CustomStyles';
import { Box, styled } from '@mui/system';
import ItemOfNav from './ItemOfNav';
import { useWindow } from '../../Context';

const HamburgerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '20px',
  position: 'fixed',
  backgroundColor: Colors.navbar,
  top: DimensionData.heightOfNavbar,
  zIndex: '98',
  cursor: 'pointer',
  textAlign: 'center',
  transition: '0.7s',
  padding: '20px 0px',
});

const HamburgerMenu = ({ toggle, onClickChange }) => {
  const { windowSize } = useWindow();

  return (
      <HamburgerBox onClick={onClickChange} sx={ windowSize >= 1025 ? {left: '-100%' } : ( toggle ? {left: '-100%',} : {left: '0',})}>
        <ItemOfNav />
      </HamburgerBox>
  );
};

export default HamburgerMenu;
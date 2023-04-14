import { HamburgerBox } from '../../CustomStyles';
import ItemOfNav from './ItemOfNav';
import { useWindow } from '../../Context';

const HamburgerMenu = ({ toggle, onClickChange }) => {
  const { windowSize } = useWindow();

  return (
      <HamburgerBox onClick={onClickChange} sx={ windowSize >= 1025 ? {left: '-100%' } : ( toggle ? {left: '-100%',} : {left: '0',})}>
        <ItemOfNav />
      </HamburgerBox>
  );
};

export default HamburgerMenu;
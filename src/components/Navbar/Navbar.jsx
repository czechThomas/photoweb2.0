import { NavBox, LogoLink } from '../../CustomStyles';
import ClasicMenu from './ClasicMenu';
import { useState } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import HamburgerMenu from './HamburgerMenu';
import { useWindow } from '../../Context';

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(true);
  const { windowSize } = useWindow();

  const handleChange = () => {
    settoggleMenu(!toggleMenu);
  };

  return (
    <>
      <NavBox>
        <LogoLink href='/'>
          <img 
            alt='signature' 
            src='/LogoLF.png' 
            style={{ maxHeight: '90px', paddingTop: '5px', paddingLeft: '40px', width: 'auto' }}
          />
        </LogoLink>
        {
          windowSize >= 1050 
          ? <ClasicMenu /> 
          : (
            <Box onClick={handleChange}>
              {
                toggleMenu 
                ? <MenuIcon 
                    sx={{ marginRight: '50px', color: '#202020', fontSize: '2.3rem', cursor: 'pointer' }}
                  />
                : <MenuOpenIcon 
                    sx={{ marginRight: '50px', color: '#202020', fontSize: '2.3rem', cursor: 'pointer' }}
                  /> 
              }
            </Box>
          )
        }
      </NavBox>
      <HamburgerMenu toggle={toggleMenu} onClickChange={handleChange} />
    </> 
  );
};

export default Navbar;
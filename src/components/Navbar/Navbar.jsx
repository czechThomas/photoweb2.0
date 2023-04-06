import { NavBox, LogoLink } from '../../CustomStyles';
import ClasicMenu from './ClasicMenu';
import { useState } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import HamburgerMenu from './HamburgerMenu';

const Navbar = ({ windowSize }) => {
  const [toggleMenu, settoggleMenu] = useState(true);

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
      <HamburgerMenu toggle={toggleMenu} windowSize={windowSize} onClickChange={handleChange} />
    </> 
  );
};

export default Navbar;
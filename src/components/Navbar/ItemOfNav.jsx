import { Link, styled } from '@mui/material';
import { Colors, Fonts } from '../../CustomStyles';

const NavLink = styled(Link)({
    textDecoration: 'none',
    cursor: 'pointer',
    color: Colors.secondary,
    fontSize: '1.3rem',
    fontFamily: Fonts.secondary,
    '&:hover': {
      color: Colors.hover,
    }
});

const ItemOfNav = () => {
    return(
        <>
            <NavLink variant="body1" href='/portfolio'>
                Portfolio
            </NavLink>
            <NavLink variant="body1" href='/informace'>
                Informace
            </NavLink>
            <NavLink variant="body1" href='/cenik'>
                Ceník
            </NavLink>
            <NavLink variant="body1" href='/kontakt'>
                Kontakt
            </NavLink>
        </>
    );
};

export default ItemOfNav;
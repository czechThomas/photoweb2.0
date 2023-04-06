import { NavLink } from '../../CustomStyles';

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
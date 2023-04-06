import { Link, Box, styled, Button, Divider, TextField, Typography } from '@mui/material';

const DimensionData = {
    heightOfNavbar: '100px',
}

const Colors = {
    primary: '#FFFFFF',
    secondary: '#202020',
    hover: '#E1B653',
    dark: '#26262699',
    light: '#26262625',
    navbar: '#FFFFFF99',
}

const Fonts = {
    default: 'Caveat',
    secondary: 'arial',
}

const FormTextField = styled(TextField)({
    maxWidth: '600px',
    '& label': {
     color: Colors.secondary,
    },
    '& label.Mui-focused': {
     color: Colors.hover,
    },
    '& .MuiOutlinedInput-root': {
     backgroundColor: '#ffffff',
    '& fieldset': {
        borderColor: Colors.secondary,
    },
    '&:hover fieldset': {
        borderColor: Colors.secondary,
    },
    '&.Mui-focused fieldset': {
        borderColor: Colors.hover,
    },
    },
})

const NavBox = styled(Box)({
    width: '100%',
    height: DimensionData.heightOfNavbar,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    zIndex: '99',
    top: '0px',
    left: '0px',
    backgroundColor: Colors.navbar,
    boxShadow: '0 4px 4px 0 rgba(0,0,0,0.2), 0 6px 8px 0 rgba(0,0,0,0.2)',
});

const LogoLink = styled(Link)({
    cursor: 'pointer',
});

const LinkBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '50px',
    marginRight: '50px',
});

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

const HeaderBox = styled(Box)({
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '35% 75%',
    position: 'relative',  
});

const MottoBox = styled(Box)({
    display: 'flex',
    marginTop: '-50px',
    paddingBottom: '30px',
    justifyContent: 'center',
    color: Colors.secondary,
});

const FindMoreButton = styled(Button)({
    marginTop: '60px',
    width: '250px',
    fontSize: '1.5em',
    color: Colors.secondary,
    border: '1px solid',
    borderColor: Colors.primary,
    backgroundColor: Colors.navbar,
    transition: '0.7s',
    '&:hover': {
        boxShadow: '0 4px 4px 0 rgba(0,0,0,0.2), 0 6px 8px 0 rgba(0,0,0,0.2)',
        backgroundColor: Colors.navbar,
        transition: '0.7s',
    }
});

const WaveBox = styled(Box)({
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    overflow: 'hidden',
});

const StyledDivider = styled(Divider)({
    width: '80%',
    margin: '0 auto',
    paddingBottom: '10px',
    paddingTop: '20px',
    fontSize: '2em',
    fontWeight: 'bolder',
    textTransform: 'uppercase',
    '&.MuiDivider-root': {
        '&::before': {
            borderTop: '2px solid black',
        },
        '&::after': {
            borderTop: '2px solid black',
        } 
    }
});

const PortfolioTypography = styled(Typography)({
    backgroundColor: Colors.light, 
    padding: '10px', 
    textTransform: 'uppercase',
});

const PortfolioButton = styled(Button)({
    marginTop: '20px',
    width: '250px',
    color: Colors.secondary,
    border: '0.5px solid',
    borderColor: Colors.navbar,
    backgroundColor: Colors.primary,
    transition: '0.7s',
    '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
        backgroundColor: Colors.primary,
        transition: '0.7s',
    }
});

const PortfolioBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '10px 0px',
});

const BannerBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '50px',
});

const styleBox = {
    paddingTop: '125px',
    maxWidth: '90%',
    margin: '0 auto',
    textAlign: 'center',
    minHeight: '55vh',
};

const styleBox35padding = {
    paddingTop: '35px',
    maxWidth: '90%',
    margin: '0 auto',
    textAlign: 'center',
};

const styleBox75width = {
    paddingTop: '125px',
    maxWidth: '75%',
    margin: '0 auto',
    textAlign: 'center',
    minHeight: '55vh',
};

const stylePortfolioBox = {
    paddingTop: '125px',
    margin: '0 auto',
    textAlign: 'center',
};

export { 
    BannerBox,
    Colors,
    DimensionData,
    FindMoreButton,
    FormTextField, 
    HamburgerBox, 
    HeaderBox, 
    LinkBox, 
    LogoLink, 
    MottoBox, 
    NavBox, 
    NavLink, 
    PortfolioBox,
    PortfolioButton,
    PortfolioTypography,
    styleBox,
    styleBox35padding,
    styleBox75width,
    stylePortfolioBox,
    StyledDivider,
    WaveBox,
};
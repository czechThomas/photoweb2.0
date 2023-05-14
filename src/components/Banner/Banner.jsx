import { Box, Typography, Avatar, styled } from '@mui/material';
import { useWindow } from '../../Context';

const BannerBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '50px',
});

const Banner = () => {
    const { windowSize } = useWindow();

    return (
        <BannerBox>
            <Box sx={{ maxWidth: '500px' }}>
                <Avatar alt="LucieFojtova" src='/Profil.jpg' sx={{ width: 350, height: 350 }} />
            </Box>
            <Box sx={{ maxWidth: '700px' }}>
                <Typography variant='body1' sx={{ padding: '0px 00px 35px 0px', textAlign: 'center', maxWidth: '600px' }}>
                    Ahoj. Jsem Lucie a již několik let miluji zvuk zmáčknuté spouště.
                    V hledáčku svého fotoaparátu mám nejčastěji rodinky, miminka a svatby. 
                </Typography>
                <Typography sx={{ padding: '0px 15px', textAlign: 'center', fontFamily: 'Corinthia, cursive', fontSize: windowSize >= 1050 ? '40px' : '30px' }}>
                    Jediná fotografie, které budete litovat, je ta, kterou nemáte.
                </Typography>
            </Box>
        </BannerBox>
    );
};

export default Banner;
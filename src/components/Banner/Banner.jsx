import { Box, Typography, Avatar } from '@mui/material';
import { BannerBox } from '../../CustomStyles';

const Banner = () => {
    return (
        <BannerBox>
            <Box sx={{ maxWidth: '500px' }}>
                {/* <BannerTypography>Zážitky</BannerTypography>
                <BannerTypography>Svatby</BannerTypography>
                <BannerTypography>Vzpomínky</BannerTypography> */}
                <Avatar alt="LucieFojtova" src='/Profil.jpg' sx={{ width: 350, height: 350 }} />
            </Box>
            <Box sx={{ maxWidth: '700px' }}>
                <Typography variant='body1' sx={{ padding: '0px 0px 35px 0px', textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
                    Ahoj! Jsem Lucie a již několik let miluji zvuk zmáčkuté spouště. V hledáčku svého fotoaparátu mám nejčastěji rodinky, miminka a svatby. 
                </Typography>
                <Typography variant="h5" sx={{ padding: '0px 15px', textAlign: 'center' }}>
                    Jediná fotografie, které budete litovat, je ta, kterou nemáte.
                </Typography>
            </Box>
        </BannerBox>
    );
};

export default Banner;
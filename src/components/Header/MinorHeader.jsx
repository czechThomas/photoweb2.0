import { Typography, styled } from '@mui/material';
import { HeaderBox } from '../../CustomStyles';

const HeadTypography = styled(Typography)({
    fontStyle: 'oblique', 
    fontWeight: 'bold', 
    fontSize: '200%',
    textShadow: '1px 2px 1px grey',
})

const MinorHeader = ({ minHeight, title }) => {
    return(
        <HeaderBox sx={{ minHeight: minHeight }}>
            {title && <HeadTypography>{title}</HeadTypography>}
        </HeaderBox>
    );
}

export default MinorHeader;
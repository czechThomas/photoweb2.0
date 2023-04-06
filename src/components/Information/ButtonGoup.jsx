import { ButtonGroup, Box, styled } from '@mui/material';
import SingleMenuButton from './SingleMenuButton';

const StyledButtonGroup = styled(ButtonGroup)({
  backgroundColor: 'white',
  '& .MuiButtonGroup-grouped:not(:last-of-type)': {
    border: '0px',
  },
});

const ButtonGoup = ({ windowSize, type, setType }) => {

  return (
    <>
      <Box sx={{ paddingTop: '30px', textAlign: 'center' }}>
        <StyledButtonGroup 
          variant="contained"
          orientation={windowSize >= 600 ? 'horizontal' : 'vertical'}
          aria-label="Photo info button group"
          sx={{ width: windowSize >= 600 ? 'auto' : '350px' }}
        >
          <SingleMenuButton linkPath="?type=svatby" isActive={type === 'svatby'}>
            Svatby
          </SingleMenuButton>
          <SingleMenuButton linkPath="?type=miminka" isActive={type === 'miminka'}>
            Miminka
          </SingleMenuButton>
          <SingleMenuButton linkPath="?type=deti" isActive={type === 'deti'}>
            Děti
          </SingleMenuButton>
          <SingleMenuButton linkPath="?type=rodinky" isActive={type === 'rodinky'}>
            Rodinky
          </SingleMenuButton>
        </StyledButtonGroup>
      </Box>
    </>
  )
}

export default ButtonGoup;

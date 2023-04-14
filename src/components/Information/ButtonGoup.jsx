import { ButtonGroup, Box, styled } from '@mui/material';
import SingleMenuButton from './SingleMenuButton';
import { useWindow } from '../../Context';

const StyledButtonGroup = styled(ButtonGroup)({
  backgroundColor: 'white',
  '& .MuiButtonGroup-grouped:not(:last-of-type)': {
    border: '0px',
  },
});

const ButtonGoup = ({ type, setType }) => {
  const { windowSize } = useWindow();

  return (
    <>
      <Box sx={{ paddingTop: '30px', textAlign: 'center' }}>
        <StyledButtonGroup 
          variant="contained"
          orientation={windowSize >= 600 ? 'horizontal' : 'vertical'}
          aria-label="Photo info button group"
          sx={{ width: windowSize >= 600 ? 'auto' : '350px' }}
        >
          <SingleMenuButton linkPath="?type=svatby" isActive={type === 'svatby'} type="svatby">
            Svatby
          </SingleMenuButton>
          <SingleMenuButton linkPath="?type=miminka" isActive={type === 'miminka'} type="miminka">
            Miminka
          </SingleMenuButton>
          <SingleMenuButton linkPath="?type=detiarodinky" isActive={type === 'detiarodinky'} type="detiarodinky">
            Děti a Rodinky
          </SingleMenuButton>
        </StyledButtonGroup>
      </Box>
    </>
  )
}

export default ButtonGoup;

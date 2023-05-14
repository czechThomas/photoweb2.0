import { Divider, styled } from "@mui/material";

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

export default function DividerText({ message }) {
    return (
        <StyledDivider>{message}</StyledDivider>
    );
}
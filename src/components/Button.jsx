import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.mytheme.main,
    '&:hover': {
        backgroundColor: theme.palette.mytheme.mainHover
    }
}))

export default StyledButton
import { Card, styled } from "@mui/material";

export const BannerCard = styled(Card)(({theme}) => ({
    border: 'none',
    boxShadow: 'none',
    position: 'relative',
}))

export const StyledCard = styled(Card)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.secondary.main,
    // color: theme.palette.mode === 'dark' ? theme.palette.primary.sub : theme.palette.secondary.sub,
    border: 'none',
    boxShadow: 'none',
}))


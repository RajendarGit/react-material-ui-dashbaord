import { Box, Grid, Stack, Typography, CardMedia, CardContent, CardActions, Checkbox, IconButton, useTheme } from "@mui/material"
import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { pink } from "@mui/material/colors";
import { homeContentData } from "../data/data";
import { StyledCard } from "../components/Card";

export const Home = () => {
    const theme = useTheme();
  return (
    <Box p={2}>
        <Stack direction="row">
            <Grid container spacing={2}>
                {homeContentData.map(item => (
                    <Grid item sm={6} md={4} lg={3}>
                        <StyledCard sx={{ mb: 4, height: '100%' }} key={item.title}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={`images/${item.img}`}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography color={theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main} gutterBottom variant="h5" component="div">
                                {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {item.subtitle}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Checkbox
                                    sx={{
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                />
                                <IconButton color="inherit"><ShareIcon/></IconButton>
                            </CardActions>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    </Box>
  )
}

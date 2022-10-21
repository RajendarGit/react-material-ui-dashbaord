import { Box, CardActions, CardContent, CardMedia, Checkbox, Grid, IconButton, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { StyledCard } from '../components/Card'
import ShareIcon from '@mui/icons-material/Share';
import { pink } from "@mui/material/colors";
import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { homeContentData } from '../data/data';
import { Banner } from '../components/Banner';

export const Explore = () => {
  const theme = useTheme();

  const BannerResource = {
    height: '100px',
    [theme.breakpoints.up('md')]: {
        height: '500px !important',
        display: 'none',
    }
  }
  return (
    <Box p={2}>
        <Banner banerHead="Explore" banerImg="222" bannerHeight={BannerResource} />
        <Stack direction="row">
            <Grid container spacing={2}>
                {homeContentData.map(itemList =>
                    <>
                        {itemList.type === 'explore' &&
                            <Grid key={itemList.title} item sm={6} md={4} lg={3}>
                                <StyledCard sx={{ mb: 4, height: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        height="auto"
                                        image={`images/${itemList.img}`}
                                        alt={itemList.title}
                                    />
                                    <CardContent>
                                        <Typography
                                        mb={0}
                                        color={theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main}
                                        variant="h5"
                                        component="h5">
                                        {itemList.title}
                                        </Typography>
                                        <Typography sx={{marginBottom: '1rem', textTransform: 'capitalize'}} variant="body3" component="p" color="text.secondary">
                                        {itemList.type}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        {itemList.subtitle}
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
                        }
                    </>
                )}
            </Grid>
        </Stack>
    </Box>
  )
}

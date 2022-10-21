import { Box, CardContent, CardMedia, Typography, useTheme } from '@mui/material'
import React from 'react'
import { BannerCard } from './Card'

export const Banner = ({banerHead, banerImg, socialLinks, bannerHeight}) => {
    const theme = useTheme();
  return (
    <Box sx={{marginBottom: '1rem'}}>
      <BannerCard>
          <CardMedia
            component="img"
            height={bannerHeight}
            image={`https://picsum.photos/id/${banerImg}/1920/200`}
            alt={banerHead}
          />
          <CardContent sx={{position: 'absolute', top: '0', height: '100%'}}>
            <Typography sx={{textTransform: 'capitalize'}} color={theme.palette.primary.sub} variant="h4" component="div">
              {banerHead}
            </Typography>
            <Typography variant='body2' sx={{position: 'absolute', bottom: '1rem'}} color={theme.palette.primary.sub}>
              {socialLinks}
            </Typography>
          </CardContent>
      </BannerCard>
    </Box>
  )
}

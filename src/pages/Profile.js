import { Box } from '@mui/material'
import React from 'react'
import { Banner } from '../components/Banner'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Profile = () => {
  return (
    <Box p={2}>
      <Banner
      banerHead="Hi! There..."
      banerImg="222"
      bannerHeight="200px"
      socialLinks={
        <>
        <FacebookOutlinedIcon sx={{marginRight: '.5rem'}}/>
        <YouTubeIcon sx={{marginRight: '.5rem'}}/>
        <LinkedInIcon sx={{marginRight: '.5rem'}}/>
        <InstagramIcon/>
        </>
      }
      />
    </Box>
  )
}
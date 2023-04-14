import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' }
      }}
      position='relative'
      p='20px'
    >
      <Typography fontWeight='600' fontSize='26px'>
        Fitness App by <span style={{color:'#FF2625'}}>Jay Gaudani</span>
      </Typography>
      <Typography
        fontWeight='700'
        sx={{
          fontSize: { lg: '44px', xs: '40px' }
        }}
        mb="23px" mt="30px"
      >
        Sweat, Smile <br /> & Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant='contained' color='error' href='#exercises' sx={{
        backgroundColor:'#FF2625',padding:'10px'
      }}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight='600'
        color='#FF2625'
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: {
            lg: 'block',
            xs: 'none'
          }
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='Banner' className='hero-banner-img'></img>
    </Box>
  )
}

export default HeroBanner

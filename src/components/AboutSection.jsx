import React from 'react'
import { Container, Stack, Typography, styled } from '@mui/material'
import Towels from '../assets/towels.jpg';

const PrincipleImageContainer = styled('div')(({theme}) => ({
  width: '100%',
  height: 450,
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 250
  }
}));

const ImageContainer =  styled('img')(({theme}) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  [theme.breakpoints.down('md')]: {
  }
}));

function AboutSection() {
  return (
    <Container>
      <Stack direction={{xs: 'column', lg: 'row'}} gap={2} justifyContent='space-between' marginBottom={{xs: 1, lg: 4}}>
        <Stack flex={1}>
          <PrincipleImageContainer>
            <ImageContainer src={Towels} alt="" />
          </PrincipleImageContainer>
        </Stack>
        <Stack flex={1} justifyContent='center'>
          <Typography variant="h5" sx={{color: '#6785FF'}} marginBottom={{xs: 1, lg: 2}}>About Company</Typography>
          <Typography variant="body1" color='inherit' marginBottom={{xs: 1, lg: 2}}>
          The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!    
          </Typography>
        </Stack>
      </Stack>
    </Container>
  )
}

export default AboutSection
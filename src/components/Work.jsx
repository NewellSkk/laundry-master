import React from 'react'
import { Stack, Typography, styled, Container, Box } from '@mui/material';
import Image1 from '../assets/services-icon1.svg'
import Image2 from '../assets/services-icon2.svg'
import Image3 from '../assets/services-icon3.svg'


const PrincipleBoxContainer = styled('div')(({theme}) => ({
  width: '50%',
  height: 250,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  overflow: 'hidden',
  flexDirection: 'column',
  background: 'white',
  padding: '1rem',
  borderRadius: '2rem',
  margin: '0.5rem 0',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    minHeight: 250,
    justifyContent: 'center'
  }
}));



const PrincipleBoxContainerTwo = styled('div')(({theme}) => ({
  width: 200,
  height: 200,
  overflow: 'hidden',
  borderRadius: '50%',
  background: 'white',
  // border: '3px solid #f1f1f1',
  margin: '0.5rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: 100,
    height: 100,
  }
}));

const ImageContainer =  styled('img')(({theme}) => ({
    height: '100%',
    width: '100%',
    objectFit: 'contain'
  }))

const OverallBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center'
}))

function Work() {
  return (
    <OverallBox>
      <Box sx={{width: '80%', height: '100%'}}>
      <Typography variant="h4" color='inherit' marginBottom={{xs: 2, lg: 2}} textAlign='center'>This is how we work</Typography>
      <Stack direction={{xs: 'column', lg: 'row'}} gap={2} justifyContent='space-between' marginBottom={{xs: 2, lg: 5}}>
        <PrincipleBoxContainer>
          <PrincipleBoxContainerTwo>
            <ImageContainer src={Image1} alt="" />
          </PrincipleBoxContainerTwo>
          <Typography variant="h6" color="#6785FF">We collect your clothes</Typography>
          <Typography variant="body1" color="gray" marginTop={{xs: 1, lg: 3}}>
          The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!
          </Typography>
        </PrincipleBoxContainer>
        <PrincipleBoxContainer>
          <PrincipleBoxContainerTwo>
            <ImageContainer src={Image2} alt="" />
          </PrincipleBoxContainerTwo>
          <Typography variant="h6" color="#6785FF">We collect your clothes</Typography>
          <Typography variant="body1" color="gray" marginTop={{xs: 1, lg: 3}}>
          The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!
          </Typography>
        </PrincipleBoxContainer>
        <PrincipleBoxContainer>
          <PrincipleBoxContainerTwo>
            <ImageContainer src={Image3} alt="" />
          </PrincipleBoxContainerTwo>
          <Typography variant="h6" color="#6785FF">We collect your clothes</Typography>
          <Typography variant="body1" color="gray" marginTop={{xs: 1, lg: 3}}>
          The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!
          </Typography>
        </PrincipleBoxContainer>
        
        
      </Stack>
      </Box>
      </OverallBox>
  )
}

export default Work
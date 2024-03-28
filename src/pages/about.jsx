import React from 'react'
import { Stack, styled, Typography } from '@mui/material'
import AboutImage from '../assets/hero2.png';
import AboutSection from '../components/AboutSection';
import Work from '../components/Work';

const ImageContainer =  styled('img')(({theme}) => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: {
    }
  }));

  const PrincipleImageContainer = styled('div')(({theme}) => ({
    width: '100%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    flexDirection: 'column',
    position: 'relative',
    marginBottom: '4rem',
    [theme.breakpoints.down('md')]: {
        minHeight: 'fit-content',
        border: '2px solid #D3D3D3',
    }
  }));


  const ImageOverlayTwo = styled('div')(({theme}) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '100%',
    padding: '10px',
    color: 'white',
    textAlign: 'left',
    minHeight: '80%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',

        alignItems: 'center',
    }
  }));

  const Heading = styled(Typography)(({theme}) => ({
    fontSize: '4rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem'
    }
  }));


function AboutPage() {
  return (
    <div>
        <PrincipleImageContainer>
            <ImageContainer src={AboutImage} alt=""></ImageContainer>
            <ImageOverlayTwo>
                <Stack direction={{xs: 'column', lg: 'row'}}>
                    <Stack width='100%' alignItems='center'>
                        <Heading variant="h4" color='inherit' marginLeft={{xs: 0, lg: 0}}>About Us</Heading>
                    </Stack>
                </Stack>
            </ImageOverlayTwo>

        </PrincipleImageContainer>
        <AboutSection />
        <Work />
    </div>
  )
}

export default AboutPage
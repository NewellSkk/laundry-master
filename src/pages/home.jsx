import React from 'react'
import { Button, Stack, styled, Typography } from '@mui/material'
import HeroImage from '../assets/wash1.jpg';
import Work from '../components/Work'
import Services from '../components/Services';
import { Navigate, useNavigate } from 'react-router-dom';

  const ImageContainer =  styled('img')(({theme}) => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: {
    }
  }));

  const PrincipleImageContainer = styled('div')(({theme}) => ({
    width: '100%',
    height: '90vh',
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

  const ButtonContainer =  styled(Button)(({theme}) => ({
    height: '3rem',
    width: '30%',
    objectFit: 'cover',
    marginTop: '1rem',
    borderRadius: '2rem',
    background: '#6785FF',
    color: 'white' ,
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        margin: '2rem 0'
    }
  }))


function HomePage() {

  const navigation = useNavigate();

  const servicesHandler = () => {
    navigation('services')
  }

  return (
    <>
        <PrincipleImageContainer>
            <ImageContainer src={HeroImage} alt=""></ImageContainer>
            <ImageOverlayTwo>
                <Stack direction={{xs: 'column', lg: 'row'}}>
                    <Stack width='100%' alignItems='center'>
                        <Heading variant="h4" color='inherit' marginLeft={{xs: 0, lg: 0}}>Quality laundry service in your city</Heading>
                        <Typography variant="h6" color='inherit' marginLeft={{xs: 0, lg: 0}} marginTop={2}>
                            We take care about cleenness of your cloth
                        </Typography>
                        <ButtonContainer onClick={servicesHandler}>Explore Services</ButtonContainer>
                    </Stack>
                </Stack>
            </ImageOverlayTwo>

        </PrincipleImageContainer>
        <Work />
        <Services />
        </>
  )
}

export default HomePage
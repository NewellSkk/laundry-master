import { Container, Stack, styled, Typography } from '@mui/material';
import React from 'react'
import Offer1 from '../assets/myoffer1.png';
import Offer2 from '../assets/myoffer2.png';
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';

const PrincipleBoxContainer = styled(Stack)(({theme}) => ({
    width: '100%',
    height: '70vh',
    overflow: 'hidden',
    background: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  }));

  const PrincipleBoxContainerFour = styled(Stack)(({theme}) => ({
    width: '100%',
    height: '70vh',
    overflow: 'hidden',
    background: 'red',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  }));

  const PrincipleBoxContainerTwo = styled('div')(({theme}) => ({
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: '50%',
    // background: 'white',
    border: '3px solid #f1f1f1',
    margin: '0.5rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: 100,
      height: 100,
    }
  }));

  const PrincipleBoxContainerThree = styled('div')(({theme}) => ({
    width: '100%',
    height: '70vh',
    overflow: 'hidden',
    background: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '50vh',
    }
  }));
  
  const ImageContainer =  styled('img')(({theme}) => ({
      height: '100%',
      width: '100%',
      objectFit: 'cover'
    }))

function Services() {
  return (
    <Container>

      <Typography variant="h4" sx={{color: 'gray'}} textAlign='center' marginTop={2} marginBottom={2}>Services We Offer</Typography>
        
        <PrincipleBoxContainerFour>
          <Stack style={{background: 'yellow', height: '100%'}} flex={1}>
            <PrincipleBoxContainerThree>
              <ImageContainer src={Image1} alt="" />
            </PrincipleBoxContainerThree>
          </Stack>
          <Stack style={{background: '#6785FF', height: '100%', display: 'flex', justifyContent: 'center'}}  flex={1} alignItems='center'>
              <PrincipleBoxContainerTwo>
                <ImageContainer src={Offer1} alt="" />
              </PrincipleBoxContainerTwo>
            <div style={{width: '60%', textAlign: 'center'}}>
              <Typography variant="h5" color="white">Cloth Ironing</Typography>
              <Typography variant="body1" color="white">
              The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!!
              </Typography>
            </div>
          </Stack>
        </PrincipleBoxContainerFour>

        <PrincipleBoxContainer>
          <Stack style={{background: 'yellow', height: '100%'}} flex={1}>
            <PrincipleBoxContainerThree>
              <ImageContainer src={Image2} alt="" />
            </PrincipleBoxContainerThree>
          </Stack>
          <Stack style={{background: '#6785FF', height: '100%', display: 'flex', justifyContent: 'center'}} flex={1} alignItems='center'>
              <PrincipleBoxContainerTwo>
                <ImageContainer src={Offer2} alt="" />
              </PrincipleBoxContainerTwo>
            <div style={{width: '60%', textAlign: 'center'}}>
              <Typography variant="h5" color="white">Cloth Laundry</Typography>
              <Typography variant="body1" color="white">
                The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!!
              </Typography>
            </div>
          </Stack>
        </PrincipleBoxContainer>
    </Container>
  )
}

export default Services
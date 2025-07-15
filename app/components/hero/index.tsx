'use client';
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Span,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Form from './components/form';

function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        bgPos={'center'}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        backgroundImage={"url('/hero.png')"}
        position='relative'
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: 'blur(2px)',
          bg: '#0F255F99',
        }}
      >
        <Container maxW={'1360px'}>
          <Center
            py={{ base: '30px', lg: '90px' }}
            h={'full'}
            flexDir={'column'}
          >
            <HStack gap={{ base: '36px', lg: '42px' }} flexWrap={'wrap'}>
              <Stack gap={{ base: 1, lg: 10 }}>
                <Heading
                  color={'light'}
                  fontWeight={600}
                  // textTransform={'uppercase'}
                  fontSize={{ base: 26, lg: 79 }}
                  lineHeight={{ base: '38px', lg: '95px' }}
                >
                  General <Span color={'red'}>Freight</Span> <br />
                  Solutions
                </Heading>
                <Text
                  maxW={'614px'}
                  color={'light'}
                  fontSize={{ base: '10px', lg: '22px' }}
                >
                  GFS – General Freight Solutions offers reliable loads, fair
                  rates, and steady support to keep drivers moving and earning.
                  Drive with a team that values your time, effort, and
                  independence.
                </Text>
                <Button
                  w={'full'}
                  bg={'red'}
                  h={'60px'}
                  size={'xl'}
                  rounded={10}
                  maxW={'301px'}
                  display={{ base: 'none', lg: 'flex' }}
                  _hover={{
                    bg: 'light',
                    color: 'primary',
                  }}
                >
                  <Link
                    target='_blank'
                    href='https://intelliapp.driverapponline.com/c/2415900?uri_b=ia_2415900_527227199'
                  >
                    Application Link
                  </Link>
                </Button>
              </Stack>
              <Box display={{ base: 'none', lg: 'flex' }}>
                <Form setOpen={setOpen} open={open} />
              </Box>
              <Stack gap={4} w={'full'} display={{ base: 'flex', lg: 'none' }}>
                <Button
                  _hover={{
                    bg: 'light',
                    color: 'primary',
                  }}
                  w={'full'}
                  maxW={'301px'}
                  bg={'red'}
                  size={'md'}
                >
                  <Link
                    target='_blank'
                    href='https://intelliapp.driverapponline.com/c/2415900?uri_b=ia_2415900_527227199'
                  >
                    Application Link
                  </Link>
                </Button>
                <Button
                  _hover={{
                    bg: 'light',
                    color: 'primary',
                  }}
                  w={'full'}
                  maxW={'301px'}
                  bg={'red'}
                  size={'md'}
                  onClick={() => setOpen(true)}
                >
                  Connect with us
                </Button>
              </Stack>
            </HStack>
          </Center>
        </Container>
      </Box>
      <Image src={'/vawe.png'} alt='vawe' />
    </>
  );
}

export default Hero;

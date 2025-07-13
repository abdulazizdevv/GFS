import { Box, Center, Container, Span, Text } from '@chakra-ui/react';
import React from 'react';

function WhyUs() {
  return (
    <Container maxW={'1360px'}>
      <Center gap={{ base: 3, lg: 7 }} flexDir={'column'} color={'primary'}>
        <Text fontWeight={'semibold'} fontSize={{ base: '33px', lg: '51px' }}>
          Why <Span color={'red'}>us?</Span>
        </Text>
        <Text
          maxW={'787px'}
          textAlign={'center'}
          fontSize={{ base: '11px', lg: '25px' }}
          lineHeight={{ base: '14px', lg: '32px' }}
        >
          We collaborate with industReliable logistics solutions based on
          experience, speed and global reach are why companies choose
          us.ry-leading brands and companies to deliver exceptional value and
          innovation.
        </Text>
      </Center>
      <Center
        bg={'primary'}
        color={'light'}
        mt={{ base: '40px', lg: '80px' }}
        rounded={{ base: 8, lg: 30 }}
        gap={{ base: '40px', lg: '150px' }}
      >
        <Text fontSize={{ base: 87, lg: 340 }}>5+</Text>
        <Text fontSize={{ base: 20, lg: 80 }}>
          YEARS OF <br /> EXCELLENT <br /> SERVICE
        </Text>
      </Center>
    </Container>
  );
}

export default WhyUs;

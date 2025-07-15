import {
  Center,
  Container,
  SimpleGrid,
  Span,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const knowDatas = [
  {
    title: '01',
    text: 'We know what drivers deserve — real respect, steady miles, and top pay.',
  },
  {
    title: '02',
    text: 'At GFS GROUP, you’re not just a number — you’re part of a team that values your time, your skills, and your life on and off the road.',
  },
  {
    title: '03',
    text: 'We offer competitive rates, flexible routes, and 24/7 support to keep you moving and earning.',
  },
  {
    title: '04',
    text: 'Ready for a company  that drives your success?  Join GFS GROUP today — Where Drivers Come First!',
  },
];

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
      <SimpleGrid
        pt={{ base: '56px', lg: '140px' }}
        gap={{ base: '10px', lg: 6 }}
        columns={{ base: 2, lg: 4 }}
      >
        {knowDatas?.map((el) => (
          <Stack key={el.title} alignItems={'center'} color={'primary'}>
            <Text fontWeight={500} fontSize={{ base: 34, lg: 63 }}>
              {el?.title}
            </Text>
            <Text textAlign={'center'} fontSize={{ base: 11, lg: 21 }}>
              {el?.text}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default WhyUs;

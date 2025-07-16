'use client';
import { Box, Container, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Card } from './reviews-card';
import { keyframes } from '@emotion/react';

const testimonials = [
  {
    id: 1,
    name: 'ANDREW',
    review:
      'Smooth process from start to finish. I got real-time updates and my package arrived earlier than expected. GFS never fails.',
  },
  {
    id: 2,
    name: 'SOFIA',
    review:
      'Loved how easy it was to schedule my delivery. They even confirmed the time by phone — super professional team!',
  },
  {
    id: 3,
    name: 'ABDULRAHMAN',
    review:
      'The service is top notch. My shipments arrive on time, even when they go through several countries. GFS is a reliable partner.',
  },
  {
    id: 4,
    name: 'DMITRIY',
    review:
      "The best service I've used so far. I can track everything and I always get notified before the courier arrives.",
  },
  {
    id: 5,
    name: 'FAZLIDDIN',
    review:
      'The support team speaks clearly and answers with respect. Everything was arranged fast, and delivery came on time. I trust GFS with no doubts!',
  },
  {
    id: 6,
    name: 'JULIA',
    review:
      'Every time I contact GFS, the staff is super kind and helpful. I feel like they really care. Love this level of service!',
  },
];

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

function Reviews() {
  return (
    <>
      <Container pt={{ base: '35px', lg: '100px' }}>
        <Text
          color={'primary'}
          textAlign={'center'}
          fontWeight={'semibold'}
          fontSize={{ base: 33, lg: 51 }}
        >
          Reviews
        </Text>
        <Text
          mt={{ base: '11px', lg: '27px' }}
          textAlign={'center'}
          mx={'auto'}
          color={'primary'}
          maxW={'787px'}
          fontSize={{ base: 11, lg: 25 }}
        >
          Discover why businesses trust GFS for reliable and efficient logistics
          solutions worldwide.
        </Text>
      </Container>
      <Box
        overflow={'hidden'}
        bg={'primary'}
        w={'full'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}
      >
        <HStack
          py={{ base: '27px', lg: '70px' }}
          gap={4}
          pb={4}
          align='stretch'
          css={{
            display: 'flex',
            width: 'max-content',
            animation: `${scroll} 25s linear infinite`,
            '&:hover': {
              animationPlayState: 'paused',
            },
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              key={`${testimonial.id}-${index}`}
              name={testimonial.name}
              review={testimonial.review}
            />
          ))}
        </HStack>
      </Box>
    </>
  );
}

export default Reviews;

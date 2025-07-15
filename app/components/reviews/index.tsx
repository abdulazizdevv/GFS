import {
  Box,
  Center,
  Container,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Card } from './reviews-card';
const testimonials = [
  {
    id: 1,
    name: 'ANDREW',
    rating: 5,
    review:
      'Smooth process from start to finish. I got real-time updates and my package arrived earlier than expected. GFS never fails.',
  },
  {
    id: 2,
    name: 'SOFIA',
    rating: 5,
    review:
      'Loved how easy it was to schedule my delivery. They even confirmed the time by phone — super professional team!',
  },
  {
    id: 3,
    name: 'ABDULRAHMAN',
    rating: 5,
    review:
      'The service is top notch. My shipments arrive on time, even when they go through several countries. GFS is a reliable partner.',
  },
  {
    id: 4,
    name: 'DMITRIY',
    rating: 5,
    review:
      "The best service I've used so far. I can track everything and I always get notified before the courier arrives.",
  },
  {
    id: 5,
    name: 'FAZLIDDIN',
    rating: 5,
    review:
      'The support team speaks clearly and answers with respect. Everything was arranged fast, and delivery came on time. I trust GFS with no doubts!',
  },
  {
    id: 6,
    name: 'JULIA',
    rating: 5,
    review:
      'Every time I contact GFS, the staff is super kind and helpful. I feel like they really care. Love this level of service!',
  },
];

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
        overflowX='auto'
        bg={'primary'}
        scrollbar={'hidden'}
        css={{
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(255, 255, 255, 0.5)',
          },
        }}
      >
        <HStack
          py={{ base: '27px', lg: '70px' }}
          gap={4}
          pb={4}
          align='stretch'
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              name={testimonial.name}
              rating={testimonial.rating}
              review={testimonial.review}
            />
          ))}
        </HStack>
      </Box>
    </>
  );
}

export default Reviews;

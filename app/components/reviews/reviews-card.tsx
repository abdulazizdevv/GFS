'use client';

import { Box, Text, HStack } from '@chakra-ui/react';
import { BiSolidStar } from 'react-icons/bi';

interface TestimonialCardProps {
  name: string;
  review: string;
}

export function Card({ name, review }: TestimonialCardProps) {
  return (
    <Box
      mx={2}
      bg='white'
      shadow='lg'
      maxW='320px'
      display='flex'
      borderRadius='xl'
      color={'primary'}
      p={{ base: 3, lg: 6 }}
      flexDirection='column'
      h={{ base: 'auto', lg: '302px' }}
      minW={{ base: '227px', lg: '320px' }}
    >
      <HStack gap={1} mb={{ base: 2, lg: 4 }}>
        <BiSolidStar size={20} color={'#FFCF23'} />
      </HStack>

      <Text
        fontSize={{ base: 'md', lg: 'lg' }}
        fontWeight='bold'
        mb={{ base: 2, lg: 4 }}
        letterSpacing='wide'
      >
        {name}
      </Text>

      <Text
        fontSize={{ base: 'sm', lg: 'lg' }}
        lineHeight='1.6'
        flex='1'
        overflow='hidden'
      >
        {review}
      </Text>
    </Box>
  );
}

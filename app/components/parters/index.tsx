import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Span,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

function Partners() {
  return (
    <>
      <Container mt={{ base: '35px', lg: '100px' }} maxW={'1360px'}>
        <Text
          fontWeight={'semibold'}
          textAlign={'center'}
          fontSize={{ base: 33, lg: 51 }}
          color={'primary'}
        >
          Our <Span color={'red'}>Partners</Span>
        </Text>
        <Text
          color={'primary'}
          fontSize={{ base: 11, lg: 25 }}
          textAlign={'center'}
          maxW={'787px'}
          mx={'auto'}
          mt={{ base: 3, lg: '27px' }}
        >
          We collaborate with industry-leading brands and companies to deliver
          exceptional value and innovation.
        </Text>
      </Container>
      <Center as='section' mt={{ base: 5, lg: '60px' }} position='relative'>
        {/* Background SVG curves */}
        <Flex
          position='absolute'
          inset={0}
          justify='space-between'
          align='center'
          pointerEvents='none'
          zIndex={0}
        >
          <Image
            h={{ base: '227px', lg: '1000px' }}
            src={'./radius_left.png'}
            alt='radius'
          />
          <Image
            h={{ base: '227px', lg: '1000px' }}
            src={'./radius_right.png'}
            alt='radius'
          />
        </Flex>

        <VStack gap={12} px={4} position='relative' zIndex={1}>
          <Box w='full' rounded='2.5rem' position='relative'>
            <Box
              w={'full'}
              zIndex={99}
              rounded={{ base: 10, lg: 40 }}
              bg={'primary.600'}
            >
              <Image
                w={{ base: 'full', xl: '1360px' }}
                h={{ base: 'full', xl: '986px' }}
                src={'/icons/all_partners.svg'}
                alt='all-partners'
              />
            </Box>
          </Box>
        </VStack>
      </Center>
    </>
  );
}

export default Partners;

import { Center, Container, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const solutionsCard = [
  {
    title: 'Regulation-Ready',
    text: 'We reduce driver stress with seamless payment flows, instant assistance, and full compliance with industry-recognized HIPAA standards.',
  },
  {
    title: 'Protected',
    text: "Our expert team verifies each delivery and leverages advanced address validation tools to make sure prescriptions arrive exactly where they're needed. ",
  },
  {
    title: 'Reliable',
    text: 'Patient satisfaction depends on precision — if anything goes wrong, we immediately deploy a driver to resolve the issue without delay.',
  },
];

function Solutions() {
  return (
    <Container maxW={'1360px'} mt={{ base: '43px', lg: '50px' }}>
      <Text
        textAlign={'center'}
        color={'primary'}
        fontWeight={'semibold'}
        fontSize={{ base: 20, lg: 47 }}
      >
        We deliver more than just freight — we deliver trust, speed, and
        solutions tailored to your needs.
      </Text>
      <SimpleGrid
        alignItems={'center'}
        py={'30px'}
        gap={'26px'}
        px={{ base: 4, lg: 0 }}
        columns={{ base: 1, lg: 3 }}
      >
        {solutionsCard.map((el, index) => {
          const isMiddleCard = index === 1;
          return (
            <Center
              key={el.title}
              gap={3}
              w={{
                base: 'full',
                lg: isMiddleCard ? 'full' : 'full',
              }}
              h={{
                base: '300px',
                lg: isMiddleCard ? '400px' : '373px',
              }}
              rounded={13}
              bg={'primary'}
              color={'light'}
              flexDir={'column'}
              alignItems={'center'}
              mx='auto'
            >
              <Text fontSize={{ base: 20, lg: 27 }}>{el?.title}</Text>
              <Text
                textAlign={'center'}
                maxW={{ base: '224px', lg: '304px' }}
                fontSize={{ base: 13, lg: 21 }}
                fontWeight={400}
              >
                {el.text}
              </Text>
            </Center>
          );
        })}
      </SimpleGrid>
      <Image
        w={'full'}
        src={'/logo_card.png'}
        objectFit={'cover'}
        alt='logo-card'
      />
    </Container>
  );
}

export default Solutions;

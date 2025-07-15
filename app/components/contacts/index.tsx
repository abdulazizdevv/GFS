'use client';
import {
  Box,
  Center,
  Container,
  HStack,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { LuClock3 } from 'react-icons/lu';

const benifitCards = [
  {
    title: '(636)-442-1334',
    icon: IoCallOutline,
  },
  {
    title: 'hr@gfs-groupllc.com',
    icon: MdOutlineMailOutline,
  },
  {
    title: '1600 Heritage Landing Suite 112C, Saint Peters, MO',
    icon: GrLocation,
  },
  {
    title: 'Monday - Friday: from 9 AM to 6 PM. Saturday: from 9 AM to 3 PM.',
    icon: LuClock3,
  },
];

function Contacts() {
  const iconSize = useBreakpointValue({ base: 17, lg: 31 });

  return (
    <Container maxW={'1360px'} mt={{ base: '35px', lg: '100px' }}>
      <Text
        color={'primary'}
        textAlign={'center'}
        fontWeight={'semibold'}
        fontSize={{ base: 33, lg: 51 }}
      >
        Contacts
      </Text>
      <Text
        fontSize={{ base: 11, lg: 25 }}
        mt={{ base: 3, lg: 6 }}
        maxW={'787px'}
        color={'primary'}
        textAlign={'center'}
        mx={'auto'}
      >
        If you have any questions about delivery, partnership, or want to learn
        more about our logistics services — feel free to reach out. The GFS team
        is always here to help!
      </Text>
      <Box
        mt={{ base: '25px', lg: '40px' }}
        width='100%'
        height={{ base: '200px', lg: '730px' }}
      >
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.511858117163!2d-90.549945!3d38.7519625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df294496e9eaad%3A0x1e0de56385c5e95!2s1600%20Heritage%20Landing%20Suite%20112C%2C%20St%20Peters%2C%20MO%2063303%2C%20USA!5e0!3m2!1sen!2s!4v1752591955809!5m2!1sen!2s'
          width='100%'
          height='100%'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          style={{ border: 0 }}
        />
      </Box>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        gap={{ base: '5px', lg: '18px' }}
        mt={{ base: '17px', lg: '66px' }}
        mb={{ base: '86px', lg: '175px' }}
      >
        {benifitCards?.map((el) => {
          const IconComponent = el.icon;

          return (
            <HStack
              key={el.title}
              bg={'primary'}
              color={'white'}
              gap={{ base: 3, lg: 6 }}
              p={{ base: 6, lg: '43px' }}
              rounded={{ base: 16, lg: 40 }}
            >
              <Center
                w={{ base: '38px', lg: '71px' }}
                h={{ base: '38px', lg: '71px' }}
                bg={'#75ADEF'}
                rounded={'full'}
              >
                <IconComponent color='white' size={iconSize} />
              </Center>
              <Text maxW={'80%'} fontSize={{ base: '14px', lg: '28px' }}>
                {el?.title}
              </Text>
            </HStack>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}

export default Contacts;

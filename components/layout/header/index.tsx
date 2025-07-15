import React from 'react';
import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { IoMdCall } from 'react-icons/io';
import MobileNav from './_components/mobile-nav';

function Header() {
  return (
    <Box
      position={'sticky'}
      zIndex={99}
      top={0}
      bg='whiteAlpha.800'
      backdropFilter='blur(6px)'
    >
      <Container maxW={'1360px'}>
        <HStack w={'full'} justifyContent={'space-between'} py={5}>
          <Image
            height={{ base: '31px', md: '73px' }}
            width={{ base: '78px', md: '177px' }}
            src={'/icons/logo.svg'}
            alt='logo'
          />
          <HStack
            gap={5}
            color={'primary'}
            display={{ base: 'none', lg: 'flex' }}
          >
            <Link href='#why-us' _hover={{ color: 'red' }}>
              Why us
            </Link>
            <Link href='#partners' _hover={{ color: 'red' }}>
              Partners
            </Link>
            <Link href='#reviews' _hover={{ color: 'red' }}>
              Reviews
            </Link>
            <Link href='#contact' _hover={{ color: 'red' }}>
              Contact
            </Link>
          </HStack>
          <HStack display={{ base: 'none', md: 'flex' }} gap={6}>
            <Link color={'primary'} href='tel:3144511111'>
              <Button
                variant={'plain'}
                _hover={{
                  color: 'red',
                }}
                size={'xl'}
              >
                <IoMdCall size={33} />
                <Text>(314) 451-1111</Text>
              </Button>
            </Link>
            <Button
              bg={'primary'}
              _hover={{
                bg: 'red',
              }}
              size={'xl'}
              rounded={12}
            >
              <Link
                textDecor={'underline'}
                target='_blank'
                href='https://intelliapp.driverapponline.com/c/2415900?uri_b=ia_2415900_1992136677'
              >
                Drive with Us
              </Link>
            </Button>
            <Button
              _hover={{
                bg: 'red',
              }}
              bg={'primary'}
              size={'xl'}
              rounded={12}
            >
              <Link href='https://intelliapp.driverapponline.com/c/2415900?uri_b=ia_2415900_1992136677'>
                Our Email
              </Link>
            </Button>
          </HStack>
          <MobileNav />
        </HStack>
      </Container>
    </Box>
  );
}

export default Header;

import {
  Center,
  Container,
  HStack,
  Image,
  Separator,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';
import { RiFacebookCircleFill } from 'react-icons/ri';

const navGroups = [
  {
    items: [
      { label: 'Flights', href: '/' },
      { label: 'Tour Packages', href: '/' },
      { label: 'Travel Deals', href: '/' },
    ],
  },
  {
    items: [
      { label: 'Top City Airports', href: '/' },
      { label: 'Top Airlines', href: '/' },
      { label: 'Top Destinations', href: '/' },
    ],
  },
  {
    items: [
      { label: 'About Us', href: '/' },
      { label: 'Reviews', href: '/' },
      { label: 'Customer Support', href: '/' },
    ],
  },
];

const legalLinks = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookies', href: '/cookies' },
];

const socialIcons = [
  { Icon: FaXTwitter, href: '#' },
  { Icon: BiLogoInstagramAlt, href: '#' },
  { Icon: RiFacebookCircleFill, href: '#' },
  { Icon: GrLinkedinOption, href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sharedStackProps = {
    gap: { base: 3, lg: 6 },
    color: 'white',
  };

  const socialIconProps = {
    w: 11,
    h: 11,
    rounded: 'full',
    p: '7px',
    border: '1px solid #646363',
  };

  return (
    <HStack
      as='footer'
      px={{ base: 4 }}
      py={{ base: 6, lg: 10 }}
      bg='dark.100'
      borderTopWidth='1px'
      justify='center'
      fontSize='sm'
    >
      <Container maxW='1200px'>
        <HStack
          flexWrap='wrap'
          alignItems='start'
          flexDir={{ base: 'column', md: 'row' }}
          w='full'
          justifyContent='space-between'
        >
          <Stack mb={{ base: 8, lg: 0 }} {...sharedStackProps}>
            <Link href='/'>
              <Image
                src='/logo_grayser.png'
                alt='Logo'
                display={{ base: 'none', lg: 'flex' }}
                w={{ base: '81px', lg: '125px' }}
                h={{ base: '27px', lg: '41px' }}
              />
            </Link>
            <HStack gap='6px' alignItems='start'>
              <IoCallOutline color='#a09e9e' size={18} />
              <Stack>
                <Link href='tel:+18007639229'>+1 (800) 763-9229 (US)</Link>
                <Link href='tel:+998712300222'>+998 (71) 230-02-22 (UZ)</Link>
              </Stack>
            </HStack>
            <HStack gap='6px' alignItems='center'>
              <HiOutlineMail color='#a09e9e' size={18} />
              <Link href='mailto:info@tripoasia.com'>info@tripoasia.com</Link>
            </HStack>
          </Stack>
          {navGroups.map((group, index) => (
            <Stack key={index} {...sharedStackProps}>
              {group.items.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </Stack>
          ))}
        </HStack>
        <Stack
          mt={8}
          display={{ base: 'flex', lg: 'none' }}
          {...sharedStackProps}
        >
          {legalLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </Stack>
        <Separator colorPalette='red' mt={{ base: 12, lg: 16 }} />
        <HStack
          justifyContent='space-between'
          color='white'
          fontWeight={400}
          mt={8}
          flexDir={{ base: 'column-reverse', md: 'row' }}
        >
          <Text>© {currentYear} - TripOasia</Text>
          <HStack>
            {socialIcons.map(({ Icon, href }, index) => (
              <Center key={index} {...socialIconProps}>
                <Link href={href}>
                  <Icon size={25} />
                </Link>
              </Center>
            ))}
          </HStack>
          <HStack gap={4} display={{ base: 'none', lg: 'flex' }}>
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </HStack>
        </HStack>
      </Container>
    </HStack>
  );
}

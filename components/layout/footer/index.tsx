import {
  Box,
  Center,
  Container,
  HStack,
  Image,
  Link,
  Separator,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import {
  FaFacebook,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import { GrLinkedinOption } from 'react-icons/gr';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { AiFillYoutube, AiOutlineYoutube } from 'react-icons/ai';
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
  return (
    <Container maxW={'1300px'}>
      <Box
        pt={{ base: '40px', lg: '80px' }}
        px={{ base: '30px', lg: '185px' }}
        rounded={{ base: 8, lg: 30 }}
        bg={'primary'}
      >
        <HStack
          flexWrap={'wrap'}
          w={'full'}
          justifyContent={'space-between'}
          alignItems={'start'}
        >
          <Stack color={'light'}>
            <Text fontSize={{ base: 13, lg: 25 }} fontWeight={700}>
              Main menu
            </Text>
            <Stack mt={{ base: 7, lg: '50px' }} gap={{ base: 5, lg: 8 }}>
              <Text fontSize={{ base: 13, lg: 24 }}>Why us</Text>
              <Text fontSize={{ base: 13, lg: 24 }}>Partners</Text>
              <Text fontSize={{ base: 13, lg: 24 }}>Reviews</Text>
              <Text fontSize={{ base: 13, lg: 24 }}>Contact</Text>
            </Stack>
          </Stack>
          <Stack color={'light'}>
            <Text fontSize={{ base: 13, lg: 25 }} fontWeight={700}>
              Contacts
            </Text>
            <Stack mt={{ base: 7, lg: '50px' }} gap={{ base: 5, lg: 8 }}>
              <Link
                href='tel:6364421334'
                color={'red'}
                fontWeight={'bold'}
                fontSize={{ base: 13, lg: 24 }}
              >
                (636)-442-1334
              </Link>
              <Link
                href='tel:3144511111'
                fontWeight={'bold'}
                color={'red'}
                fontSize={{ base: 13, lg: 24 }}
              >
                (314) 451-1111
              </Link>
              <Box>
                <Text fontWeight={'semibold'} fontSize={{ base: 13, lg: 24 }}>
                  Email:
                </Text>
                <Link
                  href='mailto:hr@gfs-groupllc.com'
                  fontSize={{ base: 13, lg: 24 }}
                >
                  hr@gfs-groupllc.com
                </Link>
              </Box>
            </Stack>
          </Stack>
          <Stack color={'light'}>
            <Text fontSize={{ base: 13, lg: 25 }} fontWeight={700}>
              Address
            </Text>
            <Stack
              maxW={'343px'}
              mt={{ base: 7, lg: '50px' }}
              gap={{ base: 5, lg: 8 }}
            >
              <Box
                width={{ base: '186px', lg: '343px' }}
                mt={{ base: '25px', lg: '40px' }}
                height={{ base: '101px', lg: '186px' }}
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
              <Text
                maxW={{ base: '186px', lg: '343px' }}
                fontSize={{ base: 11, lg: 18 }}
              >
                1600 Heritage Landing Suite 112C, Saint Peters, MO
              </Text>
            </Stack>
          </Stack>
        </HStack>
        <HStack
          display={{ base: 'none', lg: 'flex' }}
          justifyContent={{ base: 'start', lg: 'end' }}
          gap={5}
        >
          <Link
            target='_blank'
            href='https://www.youtube.com/@GFSGROUPLLC'
            rounded={'full'}
          >
            <Image w={6} src={'/icons/youtube.svg'} alt='yotube' />
          </Link>
          <Link
            target='_blank'
            href='https://www.facebook.com/people/GFS-GROUP-LLC/61563779612468/'
            rounded={'full'}
          >
            <Image w={6} src={'/icons/facebook.svg'} alt='yotube' />
          </Link>
          <Link
            target='_blank'
            href='https://www.instagram.com/gfsgroupllc'
            rounded={'full'}
          >
            <Image w={6} src={'/icons/instagram.svg'} alt='yotube' />
          </Link>
        </HStack>
        <Box
          display={{ base: 'none', lg: 'block' }}
          mb={'50px'}
          mt={2}
          h={'1px'}
          bg={'#7E868E'}
        />
        <HStack
          fontSize={{ base: 11, lg: 'md' }}
          pb={3}
          justifyContent={'space-between'}
          w={'full'}
          display={{ base: 'none', lg: 'flex' }}
        >
          <Text color={'#7E868E'}>
            © 2025 Gfs-Groupllc. All Rights Reserved.
          </Text>
          <Link color={'#7E868E'}>Terms of Service</Link>
          <Link color={'#7E868E'}>Privacy Policy</Link>
        </HStack>
        <HStack
          display={{ base: 'flex', lg: 'none' }}
          justifyContent={'space-between'}
          w={'full'}
          pb={'10px'}
        >
          <Box>
            <HStack
              py={3}
              justifyContent={{ base: 'start', lg: 'end' }}
              gap={5}
            >
              <Link
                target='_blank'
                href='https://www.youtube.com/@GFSGROUPLLC'
                rounded={'full'}
              >
                <Image w={6} src={'/icons/youtube.svg'} alt='yotube' />
              </Link>
              <Link
                target='_blank'
                href='https://www.facebook.com/people/GFS-GROUP-LLC/61563779612468/'
                rounded={'full'}
              >
                <Image w={6} src={'/icons/facebook.svg'} alt='yotube' />
              </Link>
              <Link
                target='_blank'
                href='https://www.instagram.com/gfsgroupllc'
                rounded={'full'}
              >
                <Image w={6} src={'/icons/instagram.svg'} alt='yotube' />
              </Link>
            </HStack>
            <Text fontSize={10} color={'#7E868E'}>
              © 2025 Gfs-Groupllc. All Rights Reserved.
            </Text>
          </Box>
          <Stack>
            <Link fontSize={11} color={'#7E868E'}>
              Terms of Service
            </Link>
            <Link fontSize={11} color={'#7E868E'}>
              Privacy Policy
            </Link>
          </Stack>
        </HStack>
      </Box>
    </Container>
  );
}

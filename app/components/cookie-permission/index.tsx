// components/CookieConsent.tsx
'use client';

import { Box, Button, Text, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [isAccepted, setIsAccepted] = useState(true); // SSRda flash bo'lmasligi uchun true
  const [visible, setVisible] = useState(false); // faqat animatsiya uchun

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-accepted');
    if (accepted !== 'true') {
      setIsAccepted(false);
      setTimeout(() => setVisible(true), 100); // animatsiya kechikmasin
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-accepted', 'true');
    setIsAccepted(true);
  };

  if (isAccepted) return null;

  return (
    <Box
      position='fixed'
      bottom='0'
      right='4'
      display='flex'
      justifyContent='center'
      zIndex={1000}
      transition='all 0.5s ease-in-out'
      transform={visible ? 'translateY(0)' : 'translateY(50%)'}
      opacity={visible ? 1 : 0}
    >
      <Box
        bg='white'
        p={{ base: 4, md: 6 }}
        shadow='xl'
        rounded={'30px'}
        maxW='393px'
        w='100%'
        mb={{ base: 4, md: 8 }}
        color={'primary'}
      >
        <Heading fontSize='lg' mb={2}>
          COOKIES
        </Heading>
        <Text mb={4}>
          We use cookies to enhance how you interact with our site{' '}
        </Text>
        <Button
          bg='blue.800'
          color='white'
          px={8}
          py={6}
          fontWeight='bold'
          borderRadius='full'
          onClick={handleAccept}
          _hover={{ bg: 'blue.900' }}
        >
          Accept All
        </Button>
      </Box>
    </Box>
  );
}

import { Box } from '@chakra-ui/react';
import Contacts from './components/contacts';
import Hero from './components/hero';
import Partners from './components/parters';
import Reviews from './components/reviews';
import Solutions from './components/solutions';
import WhyUs from './components/why-us';

export default function Home() {
  return (
    <>
      <Hero />
      <Box id='why-us'>
        <WhyUs />
      </Box>
      <Box id='solutions'>
        <Solutions />
      </Box>
      <Box id='partners'>
        <Partners />
      </Box>
      <Box id='reviews'>
        <Reviews />
      </Box>
      <Box id='contact'>
        <Contacts />
      </Box>
    </>
  );
}

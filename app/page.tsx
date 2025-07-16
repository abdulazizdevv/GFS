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
      <Box id='why-us' scrollMarginTop={'100px'}>
        <WhyUs />
      </Box>
      <Box id='solutions' scrollMarginTop={'100px'}>
        <Solutions />
      </Box>
      <Box id='partners' scrollMarginTop={'100px'}>
        <Partners />
      </Box>
      <Box id='reviews' scrollMarginTop={'100px'}>
        <Reviews />
      </Box>
      <Box id='contact' scrollMarginTop={'100px'}>
        <Contacts />
      </Box>
    </>
  );
}

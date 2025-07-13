'use client';
import {
  Box,
  Button,
  Center,
  CloseButton,
  Dialog,
  HStack,
  IconButton,
  Image,
  Input,
  Portal,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import React, { Dispatch, useState } from 'react';
import { RiPencilFill } from 'react-icons/ri';
import { CField } from '../CField';
import WithCountryPhoneNumber from '../PhoneInput/with-country';

function Reservation({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<boolean>;
}) {
  const isMobile = useBreakpointValue({ base: true, md: false });
  // const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState('Zokirov Kamoliddin');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <Dialog.Root
      placement={'center'}
      lazyMount
      open={open}
      size={isMobile ? 'full' : 'lg'}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            w={'full'}
            maxW={'1064px'}
            rounded={isMobile ? 0 : 24}
          >
            <Dialog.Body p={isMobile ? 4 : 6}>
              {isMobile ? (
                <VStack gap={0} h='95vh'>
                  {/* Mobile Image Section */}
                  <Box
                    position='relative'
                    w='100%'
                    h='300px'
                    rounded={16}
                    overflow='hidden'
                  >
                    <Image
                      src='/hilton.png'
                      alt='Samarkand Architecture'
                      w='100%'
                      h='100%'
                      objectFit='cover'
                    />

                    {/* Close Button */}
                    <Dialog.CloseTrigger
                      position='absolute'
                      top={4}
                      right={4}
                      bg='white'
                      rounded='full'
                      asChild
                    >
                      <CloseButton size='sm' />
                    </Dialog.CloseTrigger>

                    {/* Flight Details Overlay */}
                    <Box
                      position='absolute'
                      bottom={0}
                      left={0}
                      right={0}
                      bg='blackAlpha.500'
                      color='white'
                      p={4}
                      borderTopRadius='20px'
                      backdropFilter={'blur(8px)'}
                    >
                      <HStack justify='space-between' align='center' mb={2}>
                        <Text fontSize='lg' fontWeight='bold'>
                          Miami → Samarkand
                        </Text>
                        <IconButton variant='plain' size='sm'>
                          <RiPencilFill color='white' size={16} />
                        </IconButton>
                      </HStack>
                      <Text fontSize='sm' mb={1}>
                        March 25, 2025 - March 30, 2025
                      </Text>
                      <Text fontSize='sm'>3 adults, Economy</Text>
                    </Box>
                  </Box>

                  {/* Mobile Content Section */}
                  <VStack
                    gap={6}
                    bg='primary.100'
                    w='100%'
                    rounded={16}
                    p={3}
                    my={3}
                    justify='space-between'
                  >
                    {/* Header */}
                    <VStack gap={2} textAlign='center'>
                      <Text fontWeight='bold'>TripOasia Special Fare</Text>
                      <Text>Ends in November 30, 2025</Text>
                    </VStack>

                    {/* Pricing */}
                    <VStack gap={2} textAlign='center'>
                      <Text
                        fontSize='2xl'
                        fontWeight='600'
                        color='gray.800'
                        textDecoration='line-through'
                      >
                        $920
                      </Text>
                      <Text fontSize='4xl' fontWeight='700' color='red.500'>
                        $858
                      </Text>
                      <Text fontSize='md' color='gray.600'>
                        Round - Trip Ticket, Per Adult
                      </Text>
                    </VStack>
                  </VStack>

                  {/* Form Fields */}
                  <VStack gap={4} w='100%'>
                    <CField label='Full name'>
                      <Input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        bg='gray.50'
                        border='1px solid'
                        borderColor='gray.300'
                        borderRadius='8px'
                        fontSize='md'
                        _focus={{
                          borderColor: 'red.500',
                          boxShadow: '0 0 0 1px red.500',
                        }}
                      />
                    </CField>

                    <WithCountryPhoneNumber
                      value={phoneNumber}
                      onChange={(phone) => setPhoneNumber(phone.toString())}
                    />
                  </VStack>

                  {/* Action Buttons */}
                  <VStack gap={3} w='100%' mt='auto'>
                    <Button
                      bg='red.500'
                      color='white'
                      size='xl'
                      height='52px'
                      rounded={16}
                      w='100%'
                      fontSize='lg'
                      fontWeight='bold'
                      _hover={{ bg: 'red.600' }}
                      _active={{ bg: 'red.700' }}
                      // onClick={handleGetQuote}
                    >
                      Get a Free Quote
                    </Button>

                    <HStack w='100%' gap={3}>
                      <Button
                        variant='outline'
                        borderColor='red.500'
                        color='red.500'
                        size='xl'
                        flex='1'
                        height='52px'
                        rounded={16}
                        fontSize='md'
                        fontWeight='bold'
                        _hover={{
                          bg: 'red.50',
                          borderColor: 'red.600',
                          color: 'red.600',
                        }}
                      >
                        +1 800 763 9229
                      </Button>
                      <IconButton
                        variant={'outline'}
                        colorScheme={'primary'}
                        color='white'
                        size='xl'
                        height='52px'
                        border={'1px solid'}
                        borderColor={'primary'}
                        rounded={16}
                      >
                        <Image src={'/icons/call.svg'} w={6} h={6} alt='call' />
                      </IconButton>
                    </HStack>
                  </VStack>
                </VStack>
              ) : (
                <SimpleGrid columns={3} minH='470px' gap={4}>
                  {/* Left Side - Image and Flight Details */}
                  <Box
                    position='relative'
                    rounded={16}
                    overflow={'hidden'}
                    minH={{ base: '300px', md: '500px' }}
                  >
                    <Image
                      src='/hilton.png'
                      alt='Samarkand Architecture'
                      w='100%'
                      h='100%'
                      objectFit='cover'
                    />

                    {/* Overlay with flight details */}
                    <Box
                      position='absolute'
                      bottom={0}
                      left={0}
                      right={0}
                      bg='blackAlpha.700'
                      color='white'
                      p={6}
                      borderTopRadius='20px'
                    >
                      <HStack justify='space-between' align='center' mb={2}>
                        <Text fontSize='xl' fontWeight='bold'>
                          Miami → Samarkand
                        </Text>
                        <IconButton variant={'plain'}>
                          <RiPencilFill color='white' size={20} />
                        </IconButton>
                      </HStack>

                      <Text fontSize='sm' mb={1}>
                        March 25, 2025 - March 30, 2025
                      </Text>
                      <Text fontSize='sm'>3 adults, Economy</Text>
                    </Box>
                  </Box>

                  {/* Right Side - Form */}
                  <Stack
                    rounded={16}
                    p={6}
                    bg={'primary.100'}
                    justifyContent={'space-between'}
                  >
                    <Box textAlign='center'>
                      <Text fontSize={24} fontWeight={700}>
                        TripOasia Special Fare{' '}
                      </Text>

                      <Text fontSize={18} mt={'6px'}>
                        Ends in November 30, 2025
                      </Text>
                    </Box>

                    {/* Pricing */}
                    <Center
                      py={4}
                      px={6}
                      bg={'light'}
                      rounded={12}
                      textAlign='center'
                      flexDir={'column'}
                      h={'full'}
                      maxH={'350px'}
                      gap={12}
                    >
                      <Text
                        fontSize='36px'
                        fontWeight={600}
                        color='gray.800'
                        textDecoration='line-through'
                      >
                        $929
                      </Text>
                      <Text fontSize='72px' fontWeight={700} color='primary'>
                        $858
                      </Text>
                      <Text fontSize='22px' lineHeight={'28px'}>
                        Round - Trip Ticket Per Adult{' '}
                      </Text>
                    </Center>
                  </Stack>
                  <Stack>
                    <Text fontSize={24} fontWeight={700}>
                      Call Us Now To Save more
                    </Text>
                    <VStack gap={4} flex='1'>
                      <CField label='Full name'>
                        <Input
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          bg='white'
                          border='1px solid'
                          borderColor='gray.300'
                          borderRadius='8px'
                          fontSize='md'
                          _focus={{
                            borderColor: 'red.500',
                            boxShadow: '0 0 0 1px red.500',
                          }}
                        />
                      </CField>
                      <WithCountryPhoneNumber
                        value={phoneNumber}
                        onChange={(phone) => setPhoneNumber(phone.toString())}
                      />
                    </VStack>

                    {/* Action Buttons */}
                    <VStack gap={3} mt='auto'>
                      <Button
                        bg='primary'
                        color='white'
                        size='xl'
                        height={'52px'}
                        rounded={16}
                        w='100%'
                        fontSize='lg'
                        fontWeight='bold'
                        _hover={{ bg: 'red.600' }}
                        _active={{ bg: 'red.700' }}
                      >
                        Get a Free Quote
                      </Button>

                      <Button
                        variant='outline'
                        borderColor='red.500'
                        color='red.500'
                        size='xl'
                        w='100%'
                        height={'52px'}
                        rounded={16}
                        fontSize='lg'
                        fontWeight='bold'
                        _hover={{
                          bg: 'primary.100',
                          borderColor: 'red.600',
                          color: 'red.600',
                        }}
                      >
                        +1 800 763 9229
                        <Image src={'/icons/call.svg'} w={6} h={6} alt='call' />
                      </Button>
                    </VStack>
                  </Stack>
                </SimpleGrid>
              )}
            </Dialog.Body>

            {!isMobile && (
              <Dialog.CloseTrigger
                top='0'
                bg={'light'}
                rounded={'full'}
                insetEnd={'-12'}
                asChild
              >
                <CloseButton size='sm' />
              </Dialog.CloseTrigger>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default Reservation;

'use client';
import React, { Dispatch, useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Text,
  Field,
  useBreakpointValue,
  Dialog,
  Portal,
  IconButton,
} from '@chakra-ui/react';
import { IoClose } from 'react-icons/io5';
import { toaster } from '@/components/ui/toaster';

interface FormData {
  jobTitle: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  jobTitle?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}
const TELEGRAM_BOT_TOKEN = '7119398381:AAHMHT12yeIMb1i9tz7qC8WonCsOiL7KPDE';
const CHAT_ID = '8064371546';

const ConnectForm = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<boolean>;
}) => {
  const [formData, setFormData] = useState<FormData>({
    jobTitle: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isMobile = useBreakpointValue({ base: true, lg: false });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const phoneRegex = /^\+?\d*$/;
      if (!phoneRegex.test(value)) return;

      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, firstName, jobTitle, lastName, message, phone } = formData;

    setIsSubmitting(true);

    try {
      const payload = `
📩 New Request:

💼 Job Title: ${jobTitle}
👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
📞 Phone: ${phone}
📝 Message: ${message}

Company: GFS
`;

      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: payload,
          }),
        }
      );
      if (response.ok) {
        toaster.create({
          title: 'Message sent successfully!',
          description: 'We will get back to you soon.',
          type: 'success',
          duration: 5000,
        });

        // Reset form
        setFormData({
          jobTitle: '',
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
        });
      }
    } catch (error) {
      toaster.create({
        title: 'Error sending message',
        description: 'Please try again later.',
        type: 'error',
        duration: 5000,
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return !isMobile ? (
    <Box
      maxW='600px'
      mx='auto'
      p={8}
      bg={'transparent'}
      backdropFilter='blur(11px)'
      rounded={30}
      boxShadow='0 8px 288px #4690FF88'
      position='relative'
      overflow='hidden'
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    >
      <Text
        fontSize='2xl'
        fontWeight='bold'
        color='white'
        mb={6}
        textAlign='left'
      >
        Connect with us
      </Text>

      <Box as='form' onSubmit={handleSubmit}>
        <VStack gap={4}>
          {/* Job Title */}
          <Field.Root>
            <Input
              name='jobTitle'
              value={formData.jobTitle}
              onChange={handleInputChange}
              placeholder='What is your job title?'
              size='xl'
              bg='rgba(0, 0, 0, 0.5)'
              border='none'
              borderRadius='12px'
              color='white'
              _placeholder={{ color: 'rgba(255, 255, 255, 0.6)' }}
              _focus={{
                boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                bg: 'rgba(0, 0, 0, 0.6)',
              }}
            />
          </Field.Root>
          {/* Name and Last Name */}
          <HStack gap={4} w='full'>
            <Field.Root>
              <Input
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder='Name'
                size='lg'
                bg='rgba(0, 0, 0, 0.5)'
                border='none'
                borderRadius='12px'
                color='white'
                _placeholder={{ color: 'rgba(255, 255, 255, 0.6)' }}
                _focus={{
                  boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                  bg: 'rgba(0, 0, 0, 0.6)',
                }}
              />
            </Field.Root>
            <Field.Root>
              <Input
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder='Last Name'
                size='lg'
                bg='rgba(0, 0, 0, 0.5)'
                border='none'
                borderRadius='12px'
                color='white'
                _placeholder={{ color: 'rgba(255, 255, 255, 0.6)' }}
                _focus={{
                  boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                  bg: 'rgba(0, 0, 0, 0.6)',
                }}
              />
            </Field.Root>
          </HStack>

          {/* Phone and Email */}
          <HStack gap={4} w='full'>
            <Field.Root>
              <Input
                type='tel'
                name='phone'
                inputMode='tel'
                value={formData.phone}
                pattern='[\d+]*'
                onChange={handlePhoneInputChange}
                placeholder='Phone'
                size='lg'
                bg='rgba(0, 0, 0, 0.5)'
                border='none'
                borderRadius='12px'
                color='white'
                _placeholder={{ color: 'rgba(255, 255, 255, 0.6)' }}
                _focus={{
                  boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                  bg: 'rgba(0, 0, 0, 0.6)',
                }}
              />
            </Field.Root>
            <Field.Root>
              <Input
                name='email'
                type='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Email'
                size='lg'
                bg='rgba(0, 0, 0, 0.5)'
                border='none'
                borderRadius='12px'
                color='white'
                _placeholder={{ color: 'rgba(255, 255, 255, 0.6)' }}
                _focus={{
                  boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                  bg: 'rgba(0, 0, 0, 0.6)',
                }}
              />
            </Field.Root>
          </HStack>

          {/* Message */}
          <Field.Root>
            <Textarea
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              placeholder='Your message (optional)'
              size='lg'
              minH='120px'
              bg='rgba(0, 0, 0, 0.5)'
              border='none'
              borderRadius='12px'
              color='white'
              resize='vertical'
              _placeholder={{ color: 'rgba(255, 255, 255, 0.6)' }}
              _focus={{
                boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                bg: 'rgba(0, 0, 0, 0.6)',
              }}
            />
          </Field.Root>

          {/* Submit Button */}
          <Button
            type='submit'
            size='lg'
            w='full'
            bg={'red'}
            borderRadius='10px'
            border='none'
            fontSize='lg'
            py={6}
            height={'60px'}
            loading={isSubmitting}
            loadingText='Sending...'
            _hover={{
              bg: 'light',
              color: 'primary',
            }}
            _active={{
              transform: 'translateY(0)',
            }}
            transition='all 0.2s'
          >
            Send Message
          </Button>
        </VStack>
      </Box>
    </Box>
  ) : (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        <Button variant='outline'>Open</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content mx={4} bg={'transparent'} rounded={30}>
            <Box
              maxW='600px'
              mx='auto'
              p={8}
              bg={'#08101C'}
              backdropFilter='blur(11px)'
              rounded={30}
              boxShadow='0 8px 288px #4690FF88'
              position='relative'
              overflow='hidden'
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
              }}
            >
              <HStack
                mb={6}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Text
                  fontSize='2xl'
                  fontWeight='bold'
                  color='white'
                  textAlign='left'
                >
                  Connect with us
                </Text>
                <IconButton onClick={() => setOpen(false)} variant={'plain'}>
                  <IoClose color='var(--red-color)' />
                </IconButton>
              </HStack>

              <Box as='form' onSubmit={handleSubmit}>
                <VStack gap={4}>
                  {/* Job Title */}
                  <Field.Root>
                    <Input
                      name='jobTitle'
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      placeholder='What is your job title?'
                      size='md'
                      bg='#111B2B'
                      border='none'
                      borderRadius='12px'
                      color='white'
                      _placeholder={{ color: 'rgba(255, 255, 255, 0.6)' }}
                      _focus={{
                        boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                        bg: 'rgba(0, 0, 0, 0.6)',
                      }}
                    />
                  </Field.Root>
                  {/* Name and Last Name */}
                  <HStack gap={4} w='full'>
                    <Field.Root>
                      <Input
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder='Name'
                        size='md'
                        bg='#111B2B'
                        border='none'
                        borderRadius='12px'
                        color='white'
                        _placeholder={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        _focus={{
                          boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                          bg: 'rgba(0, 0, 0, 0.6)',
                        }}
                      />
                    </Field.Root>
                    <Field.Root>
                      <Input
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder='Last Name'
                        size='md'
                        bg='#111B2B'
                        border='none'
                        borderRadius='12px'
                        color='white'
                        _placeholder={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        _focus={{
                          boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                          bg: 'rgba(0, 0, 0, 0.6)',
                        }}
                      />
                    </Field.Root>
                  </HStack>

                  {/* Phone and Email */}
                  <HStack gap={4} w='full'>
                    <Field.Root>
                      <Input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder='Phone'
                        size='md'
                        bg='#111B2B'
                        border='none'
                        borderRadius='12px'
                        color='white'
                        _placeholder={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        _focus={{
                          boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                          bg: 'rgba(0, 0, 0, 0.6)',
                        }}
                      />
                    </Field.Root>
                    <Field.Root>
                      <Input
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='Email'
                        size='md'
                        bg='#111B2B'
                        border='none'
                        borderRadius='12px'
                        color='white'
                        _placeholder={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        _focus={{
                          boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                          bg: 'rgba(0, 0, 0, 0.6)',
                        }}
                      />
                    </Field.Root>
                  </HStack>

                  {/* Message */}
                  <Field.Root>
                    <Textarea
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder='Your message (optional)'
                      size='lg'
                      minH='120px'
                      bg='#111B2B'
                      border='none'
                      borderRadius='12px'
                      color='white'
                      resize='vertical'
                      _placeholder={{ color: 'rgba(255, 255, 255, 0.6)' }}
                      _focus={{
                        boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                        bg: 'rgba(0, 0, 0, 0.6)',
                      }}
                    />
                  </Field.Root>

                  {/* Submit Button */}
                  <Button
                    type='submit'
                    size='lg'
                    w='full'
                    bg={'red'}
                    borderRadius='10px'
                    border='none'
                    fontSize='lg'
                    py={6}
                    height={'60px'}
                    loading={isSubmitting}
                    loadingText='Sending...'
                    _hover={{
                      bg: 'light',
                      color: 'primary',
                    }}
                    _active={{
                      transform: 'translateY(0)',
                    }}
                    transition='all 0.2s'
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Box>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ConnectForm;

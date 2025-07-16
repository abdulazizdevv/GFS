'use client';

import {
  IconButton,
  Drawer,
  Portal,
  Image,
  Text,
  Stack,
  Link,
  HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Drawer.Root
        placement={'top'}
        open={isOpen}
        onOpenChange={(e) => setIsOpen(e.open)}
      >
        <Drawer.Trigger asChild>
          <IconButton
            aria-label='Open navigation'
            display={{ base: 'flex', lg: 'none' }}
            onClick={() => setIsOpen(true)}
            variant='ghost'
            size='md'
            rounded={12}
          >
            <CiMenuBurger />
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content roundedBottom={'30px'}>
              <Drawer.Header px={4} height={'64px'}>
                <HStack w={'full'} justifyContent={'space-between'}>
                  <Link href='/'>
                    <Image
                      height={{ base: '31px', md: '73px' }}
                      width={{ base: '78px', md: '177px' }}
                      src={'/icons/logo.svg'}
                      alt='logo'
                    />
                  </Link>{' '}
                  <IconButton
                    onClick={() => setIsOpen(false)}
                    variant={'plain'}
                  >
                    <IoClose size={24} color='#EB3337' />
                  </IconButton>
                </HStack>
              </Drawer.Header>
              <Drawer.Body px={'30px'}>
                <Text fontSize={13} color={'primary'} fontWeight={700}>
                  Main menu
                </Text>
                <Stack mt={6} gap={4} pb={6} color={'primary'}>
                  <Link
                    onClick={onClose}
                    href='#why-us'
                    _hover={{ color: 'red' }}
                  >
                    Why us
                  </Link>
                  <Link
                    onClick={onClose}
                    href='#partners'
                    _hover={{ color: 'red' }}
                  >
                    Partners
                  </Link>
                  <Link
                    onClick={onClose}
                    href='#reviews'
                    _hover={{ color: 'red' }}
                  >
                    Reviews
                  </Link>
                  <Link
                    onClick={onClose}
                    href='#contact'
                    _hover={{ color: 'red' }}
                  >
                    Contact
                  </Link>
                </Stack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}

export default MobileNav;

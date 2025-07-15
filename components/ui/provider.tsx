'use client';

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import { Toaster } from './toaster';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          DEFAULT: { value: '#183B89' },
          100: { value: '#FEECED' },
          600: { value: '#081246' },
        },
        red: {
          DEFAULT: { value: '#EB3337' },
          100: { value: '#FEECED' },
          700: { value: '#FF0010' },
        },
        dark: {
          DEFAULT: { value: '#000000' },
          100: { value: '#1C1B1B' },
        },
        light: {
          DEFAULT: { value: '#ffffff' },
          100: { value: '#F1F1F1' },
          200: { value: '#faf7f7' },
          300: { value: '#F3F3F3' },
          400: { value: '#EDEDED' },
          500: { value: '#F3F4F9' },
        },
        gray: {
          DEFAULT: { value: 'gray' },
          100: { value: '#F6F6F6' },
        },
      },
    },
  },
  globalCss: {
    ':root': {
      '--primary-color': '#183B89',
      '--red-color': '#EB3337',
      '--rate-color': '#FFB338',
      '--gray-color-300': '#F3F3F3',
      '--gray-color-400': '#EDEDED',
      '--gray-color-500': '#CDCDCD',
      '--gray-color-600': '#676767',
      '--gray-color-700': '#667085',
      '--gray-color-800': '#475467',
    },
  },
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <Toaster />
      <ColorModeProvider forcedTheme='light' {...props} />
    </ChakraProvider>
  );
}

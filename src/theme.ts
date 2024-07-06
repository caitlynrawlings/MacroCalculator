// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#F1D9F2',
        color: 'white',
      },
    },
  },
  components: {
    NumberInput: {
      variants: {
        outline: {
          field: {
            border: '1px solid',
            borderColor: 'gray.400',
            borderRadius: 'md',
            _hover: {
              borderColor: 'gray.500',
            },
            _focus: {
              borderColor: 'blue.500',
              boxShadow: '0 0 0 1px blue.500',
            },
          },
        },
      },
    },
  },
});

export default theme;

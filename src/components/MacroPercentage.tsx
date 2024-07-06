import {
    HStack,
    Text
  } from '@chakra-ui/react';
  import React from 'react';
  
  const MacroPercentage: React.FC<{ macro: string, percentage: number }> = ({ macro, percentage }) => {
    return (
      <HStack spacing="24px">
        <Text>{macro}: {100 * percentage}%</Text>
      </HStack>
    );
  };
  
  export default MacroPercentage;
  
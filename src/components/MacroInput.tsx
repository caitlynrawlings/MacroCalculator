import {
    HStack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Text
  } from '@chakra-ui/react';
  import React from 'react';
  
  const MacroInput: React.FC<{ label: string; onAmountChange: (value: number) => void }> = ({ label, onAmountChange }) => {
    return (
      <HStack spacing="24px">
        <NumberInput defaultValue={0} min={0} onChange={(_, valueAsString) => onAmountChange(valueAsString)}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text>grams {label}</Text>
      </HStack>
    );
  };
  
  export default MacroInput;
  
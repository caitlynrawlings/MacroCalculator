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
  
  const MacroInput: React.FC<{ label: string, defaultVal: number, onAmountChange: (value: number) => void }> = ({ label, defaultVal, onAmountChange }) => {
    return (
      <HStack spacing="20px">
        <NumberInput min={0} defaultValue={defaultVal} onChange={(_, valueAsString) => onAmountChange(valueAsString)}>
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
  
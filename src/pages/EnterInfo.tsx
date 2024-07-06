import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Center, Stack, Button} from '@chakra-ui/react'
import MacroInput from '../components/MacroInput.tsx'

const EnterInfo: React.FC<{ onCalculate: (protein: number, carb: number, fat: number) => void }> = ({ onCalculate }) => {
  const [proteinAmount, setProteinAmount] = useState<number>(0);
  const [CarbAmount, setCarbAmount] = useState<number>(0);
  const [FatAmount, setFatAmount] = useState<number>(0);

  const handleProteinChange = (value: number) => {
    setProteinAmount(value);
  };

  const handleCarbChange = (value: number) => {
    setCarbAmount(value);
  };

  const handleFatChange = (value: number) => {
    setFatAmount(value);
  };

  const handleCalculate = () => {
    // Call onCalculate callback with current values
    onCalculate(proteinAmount, CarbAmount, FatAmount);
  };

  return (
    <Center h='90vh'>
      <Card>
        <CardHeader>
          Enter your intake of each macro: 
        </CardHeader>
        <CardBody>
          <Stack spacing='24px'>
            <MacroInput label='protein' onAmountChange={handleProteinChange}></MacroInput>
            <MacroInput label='fat' onAmountChange={handleFatChange}></MacroInput>
            <MacroInput label='carb' onAmountChange={handleCarbChange}></MacroInput>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button colorScheme='teal' size='md' onClick={handleCalculate}>
            Calculate
          </Button>
        </CardFooter>
      </Card>
    </Center>
  );
};

export default EnterInfo;

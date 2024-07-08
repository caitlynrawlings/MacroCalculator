import React, { useState } from 'react';
import { Heading, Card, CardHeader, CardBody, CardFooter, Text, Center, Stack, Button} from '@chakra-ui/react'
import MacroInput from '../components/MacroInput.tsx'

const EnterInfo: React.FC<{ protein: number, carb: number, fat: number, onCalculate: (protein: number, carb: number, fat: number) => void }> = ({ protein, carb, fat, onCalculate }) => {
  const [proteinAmount, setProteinAmount] = useState<number>(protein);
  const [CarbAmount, setCarbAmount] = useState<number>(carb);
  const [FatAmount, setFatAmount] = useState<number>(fat);

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
    <Card>
      <CardHeader>
        <Heading as='h1' size='lg'>Macros Calculator </Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing='16px'>
          <Text>Enter your intake of each macro: </Text>
          <MacroInput label='carbs' defaultVal={carb} onAmountChange={handleCarbChange}></MacroInput>
          <MacroInput label='fat' defaultVal={fat} onAmountChange={handleFatChange}></MacroInput>
          <MacroInput label='protein' defaultVal={protein} onAmountChange={handleProteinChange}></MacroInput>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button colorScheme='teal' size='md' onClick={handleCalculate}>
          Calculate
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EnterInfo;

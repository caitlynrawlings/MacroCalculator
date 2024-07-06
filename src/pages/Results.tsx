import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Center, Stack, Button} from '@chakra-ui/react'
import MacroPercentage from '../components/MacroPercentage.tsx'

const Results: React.FC<{ protein: number, carb: number, fat: number, onBack: () => void }> = ({ protein, carb, fat, onBack }) => {
  const total : number = protein + carb + fat;

  const handleBack = () => {
    // Call onCalculate callback with current values
    onBack();
  };

  return (
    <Center h='90vh'>
      <Card>
        <CardHeader>
          Percentages of each macro in diet: 
        </CardHeader>
        <CardBody>
          <Stack spacing='24px'>
            <MacroPercentage macro='protein' percentage={protein/total}></MacroPercentage>
            <MacroPercentage macro='fat' percentage={fat/total}></MacroPercentage>
            <MacroPercentage macro='carb' percentage={carb/total}></MacroPercentage>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button colorScheme='teal' size='md' onClick={handleBack}>
            Back
          </Button>
        </CardFooter>
      </Card>
    </Center>
  );
};

export default Results;

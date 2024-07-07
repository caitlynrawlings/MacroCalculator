import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Center, Stack, Button} from '@chakra-ui/react'
import MacroPercentage from '../components/MacroPercentage.tsx'

const Summary: React.FC<{ protein: number, carb: number, fat: number, onBack: () => void }> = ({ protein, carb, fat, onBack }) => {
  const total : number = protein + carb + fat;

  return (
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
          <Button colorScheme='teal' size='md' onClick={onBack}>
            Back
          </Button>
        </CardFooter>
      </Card>
  );
};

export default Summary;

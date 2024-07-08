import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Center, Stack, Button, Heading} from '@chakra-ui/react'
import MacroPercentage from '../components/MacroPercentage.tsx'

const Summary: React.FC<{ protein: number, carb: number, fat: number, onBack: () => void }> = ({ protein, carb, fat, onBack }) => {
  const total : number = protein + carb + fat;

  return (
    <Card>
        <CardHeader>
          <Heading as='h1' size='md'>Percentages of each macro in diet: </Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing='16px'>
            <MacroPercentage macro='Carbs' percentage={carb/total}></MacroPercentage>
            <MacroPercentage macro='Fat' percentage={fat/total}></MacroPercentage>
            <MacroPercentage macro='Protein' percentage={protein/total}></MacroPercentage>
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

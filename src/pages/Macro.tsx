import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Center, Stack, Button} from '@chakra-ui/react'

const Summary: React.FC<{ macro: string, amount: number, percentage: number, minRecommendation: number, maxRecommendation: number, source: string, onBack: () => void }> = ({ macro, amount, percentage, minRecommendation, maxRecommendation, source, onBack }) => {

  const calculateChange = (type : string) => {
    if (type === "under") {  // if the percentage of this macro in diet is less than the recommended
      const total = amount / (percentage / 100);
      const diff = ((minRecommendation / 100) * total - amount) / (1 - (minRecommendation / 100))
      return diff.toFixed(2)
    } else {  // if the percentage of this macro in diet is greater than the recommended
      const total = amount / (percentage / 100);
      const otherMacros = total - amount;
      console.log(otherMacros)
      const diff = (((100 - maxRecommendation) / 100) * total - otherMacros) / (1 - ((100 - maxRecommendation) / 100))
      return diff.toFixed(2)
    }
  }

  return (
    <Card>
        <CardHeader>
          {macro}: {percentage}%
        </CardHeader>
        <CardBody>
          <Stack spacing='24px'>
            <Text>It's recommended for {minRecommendation}-{maxRecommendation}% of your diet to come from {macro}. </Text>
            <Text>Source: {source} </Text>
            {percentage < minRecommendation && (
              <Text>To reach this recommendation with the current macro amount, {macro} intake would need to increase by {calculateChange("under")} grams.</Text>
            )}
            {percentage > maxRecommendation && (
              <Text>To reach this recommendation with the current macro amount, other macro intake would need to increase by a combined {calculateChange("over")} grams.</Text>
            )}
            {percentage <= maxRecommendation && percentage >= minRecommendation && (
              <Text>Current macro amount is in this range.</Text>
            )}
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

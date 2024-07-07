import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Center, Stack, Button, Tabs, TabList, Tab, TabPanel, TabPanels} from '@chakra-ui/react'
import Macro from './Macro.tsx'
import Summary from './Summary.tsx';

const Results: React.FC<{ protein: number, carb: number, fat: number, onBack: () => void }> = ({ protein, carb, fat, onBack }) => {
  const total : number = protein + carb + fat;

  const handleBack = () => {
    // Call onCalculate callback with current values
    onBack();
  };

  return (
    <Center h='90vh'>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Protein</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Summary carb={carb} protein={protein} fat={fat} onBack={handleBack}/>
          </TabPanel>
          <TabPanel>
            <Macro macro='protein' 
              amount={protein} 
              percentage={parseFloat((100 * protein / total).toFixed(2))} 
              minRecommendation={10} 
              maxRecommendation={35} 
              source={"https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/are-you-getting-too-much-protein#:~:text=Anywhere%20from%2010%25%20to%2035,per%20kilogram%20of%20body%20weight."}
              onBack={handleBack}
            ></Macro>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};

export default Results;

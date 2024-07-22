import React, { useState } from 'react';
import { Heading, Card, CardHeader, CardBody, CardFooter, Text, Stack, Button,  Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import MacroInput from '../components/MacroInput.tsx'

const Start: React.FC<{ protein: number, carb: number, fat: number, onCalculate: (protein: number, carb: number, fat: number) => void }> = ({ protein, carb, fat, onCalculate }) => {
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

  const EnterInfo = () => {
    return(
      <Card>
        <CardHeader>
          <Heading as='h1' size='md'>Macros Calculator </Heading>
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
  }

  const MoreInfo = () => {
    return (
      <Card>
        <CardHeader>
          <Heading as='h1' size='md'>More Infomation </Heading>
        </CardHeader>
        <CardBody>
          <Text mb={4}>
            Macronutrients are nutrients that provide the energy and materials needed for growth, metabolism, and other bodily functions. They are required in larger amounts compared to micronutrients (vitamins and minerals). The three main types of macronutrients are:
          </Text>
          <Text mb={4}>
            <strong>Carbohydrates:</strong> These are the body's primary source of energy. They are broken down into glucose, which is used by cells for fuel. Sources include bread, rice, pasta, fruits, and vegetables.
          </Text>
          <Text mb={4}>
            <strong>Proteins:</strong> These are essential for building and repairing tissues, making enzymes and hormones, and supporting immune function. Proteins are made up of amino acids. Sources include meat, fish, eggs, dairy products, legumes, and nuts.
          </Text>
          <Text mb={4}>
            <strong>Fats:</strong> These provide a concentrated source of energy and are necessary for absorbing fat-soluble vitamins (A, D, E, K). Fats also play a role in insulating the body and protecting vital organs. Sources include oils, butter, avocados, nuts, and fatty fish.
          </Text>
        </CardBody>
      </Card>
    );
  }

  return (
    <Tabs variant='soft-rounded' colorScheme='teal'>
      <TabList>
        <Tab>Enter Macros</Tab>
        <Tab>More Information</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <EnterInfo/>
        </TabPanel>
        <TabPanel>
          <MoreInfo/>
        </TabPanel>
              </TabPanels>
    </Tabs>
  );
};

export default Start;

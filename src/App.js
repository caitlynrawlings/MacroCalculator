import React, { useState } from 'react';
import { ChakraProvider as ChakraBaseProvider } from '@chakra-ui/react';
import { Container, Center } from '@chakra-ui/react'
import theme from './theme.ts';
import Start from './pages/Start.tsx';
import Results from './pages/Results.tsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Start');
  const [carb, setCarb] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);

  // Function to change the current page
  const loadResults = (protein, carb, fat) => {
    setCarb(carb);
    setProtein(protein);
    setFat(fat);
    setCurrentPage('Results');
  };

  // Function to change the current page
  const loadEnter = () => {
    setCurrentPage('Start');
  };

  return (
    <ChakraBaseProvider theme={theme}>
      <Center marginTop='15vh'>
        <Container maxW='lg'>
          {currentPage === 'Start' && (
            <Start
              carb={carb} 
              protein={protein} 
              fat={fat}
              onCalculate={loadResults}
            />
          )}
          {currentPage === 'Results' && (
            <Results 
              carb={carb} 
              protein={protein} 
              fat={fat} 
              onBack={loadEnter}
            />
          )}
        </Container>
      </Center>
    </ChakraBaseProvider>
  );
};

export default App;

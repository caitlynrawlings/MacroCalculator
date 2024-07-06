import React, { useState } from 'react';
import { ChakraProvider as ChakraBaseProvider } from '@chakra-ui/react'; // Changed ChakraBaseProvider to ChakraProvider
import theme from './theme.ts';
import EnterInfo from './pages/EnterInfo.tsx';
import Results from './pages/Results.tsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('EnterInfo');
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
    setCurrentPage('EnterInfo');
  };

  return (
    <ChakraBaseProvider theme={theme}>
      {currentPage === 'EnterInfo' && (
        <EnterInfo
          onCalculate={loadResults}
          // Add EnterInfo-specific props here
        />
      )}
      {currentPage === 'Results' && (
        <Results carb={carb} protein={protein} fat={fat} onBack={loadEnter}
          // Add Result-specific props here
        />
      )}
    </ChakraBaseProvider>
  );
};

export default App;

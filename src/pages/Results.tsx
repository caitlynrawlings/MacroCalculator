import React from 'react';
import { Tabs, TabList, Tab, TabPanel, TabPanels} from '@chakra-ui/react'
import Macro from './Macro.tsx'
import Summary from './Summary.tsx';

const Results: React.FC<{ protein: number, carb: number, fat: number, onBack: () => void }> = ({ protein, carb, fat, onBack }) => {
  const total : number = protein + carb + fat;

  const handleBack = () => {
    // Call onCalculate callback with current values
    onBack();
  };

  return (
    <Tabs variant='soft-rounded' colorScheme='teal'>
      <TabList>
        <Tab>Summary</Tab>
        <Tab>Carbs</Tab>
        <Tab>Fat</Tab>
        <Tab>Protein</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Summary carb={carb} protein={protein} fat={fat} onBack={handleBack}/>
        </TabPanel>
        <TabPanel>
          <Macro macro='Carbs' 
            amount={carb} 
            percentage={parseFloat((100 * carb / total).toFixed(2))} 
            minRecommendation={45} 
            maxRecommendation={65} 
            source={"https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/carbohydrates/art-20045705#:~:text=The%20Dietary%20Guidelines%20for%20Americans,calories%20should%20be%20from%20carbohydrates."}
            onBack={handleBack}
          ></Macro>
        </TabPanel>
        <TabPanel>
          <Macro macro='Fat' 
            amount={fat} 
            percentage={parseFloat((100 * fat / total).toFixed(2))} 
            minRecommendation={20} 
            maxRecommendation={35} 
            source={"https://newsinhealth.nih.gov/2011/12/weighing-dietary-fats#:~:text=Experts%20say%20that%20the%20total,be%2025%25%20to%2035%25."}
            onBack={handleBack}
          ></Macro>
        </TabPanel>
        <TabPanel>
          <Macro macro='Protein' 
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
  );
};

export default Results;

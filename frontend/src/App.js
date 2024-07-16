import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import GardenScreen from './screens/gardenScreen';
import AddPlantScreen from './screens/AddPlantScreen';
import NewGardenScreen from './screens/NewGardenScreen';
import PlantScreen from './screens/PlantScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/garden/:gardenId" element={<GardenScreen />} />
        <Route path="/new-garden" element={<NewGardenScreen />} />
        <Route path="/add-plant/:gardenId" element={<AddPlantScreen />} />
        <Route path="/plant/:plantId" element={<PlantScreen />} />
      </Routes>
    </Router>
  );
};

export default App;

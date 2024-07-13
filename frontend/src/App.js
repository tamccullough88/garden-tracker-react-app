import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import GardenScreen from './screens/gardenScreen';
// import AddPlantScreen from './screens/AddPlantScreen';
// import NewGardenScreen from './screens/NewGardenScreen';
// import PlantScreen from './screens/PlantScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/garden/:gardenId" element={<GardenScreen />} />
        {/* <Route path="/add-plant" component={AddPlantScreen} />
        <Route path="/new-garden" component={NewGardenScreen} />
        <Route path="/plant/:plantId" component={PlantScreen} /> */}
      </Routes>
    </Router>
  );
};

export default App;

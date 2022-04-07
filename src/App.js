import React from 'react';
import SolarSystem from './components/SolarSystem';
import Header from './components/Header';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;

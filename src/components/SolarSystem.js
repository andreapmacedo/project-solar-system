import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas do sistema solar" />
        <div className="planets-container">
          { Planets.map((planet, index) => {
            const { name, image } = planet;
            return <PlanetCard planetName={ name } planetImage={ image } key={ index } />;
          })}
        </div>
      </div>
    );
  }
}

export default SolarSystem;

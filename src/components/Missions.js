import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div>
         {missions.map({ name, year, country, destination }, index) => {
            const { name, year, country, destination } = mission;
            return (
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
                key={ index }
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Missions;

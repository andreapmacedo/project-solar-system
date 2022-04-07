import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    const planetAlt = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card" className="planet-card">
        <img src={ planetImage } alt={ planetAlt } id={ planetName } />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );//
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.node.isRequired,
};

export default PlanetCard;

import React from 'react';
import AnimalsTable from './animalsTable';
class AnimalsHeader extends React.Component {
  render() {
		return (
      <header className="headerAnimals">
      <h1 className="header__tagline">Animals !</h1>
      <div className="headerAnimals__learn" >
      <AnimalsTable />
       </div>
      </header>
      );
      }
}
export default AnimalsHeader

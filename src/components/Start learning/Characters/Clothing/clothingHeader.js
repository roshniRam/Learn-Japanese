import React from 'react';
import ClothingTable from './clothingTable';
class ClothingHeader extends React.Component {
  render() {
		return (
      <header className="headerClothing">
      <h1 className="header__tagline">Clothing !</h1>
      <div className="headerClothing__learn" >
      <ClothingTable />
       </div>
      </header>
      );
      }
}
export default ClothingHeader

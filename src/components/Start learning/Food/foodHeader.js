import React from 'react';
import FoodTable from './foodTable';
class FoodHeader extends React.Component {
  render() {
		return (
      <header className="headerFood">
      <h1 className="header__tagline">Food !</h1>
      <div className="headerFood__learn" >
      <FoodTable />
       </div>
      </header>
      );
      }
}
export default FoodHeader

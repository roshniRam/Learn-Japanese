import React from 'react';
import ColorsTable from './colorsTable';
class ColorsHeader extends React.Component {
  render() {
		return (
      <header className="headerColors">
      <h1 className="header__tagline">Colors !</h1>
      <div className="headerColors__learn" >
      <ColorsTable />
       </div>
      </header>
      );
      }
}
export default ColorsHeader

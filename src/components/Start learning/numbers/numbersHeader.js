import React from 'react';
import NumbersTable from './numbersTable';
class NumbersHeader extends React.Component {
  render() {
		return (
      <header className="headerNumbers">
      <h1 className="header__tagline">Numbers !</h1>
      <div className="headerNumbers__learn" >
      <NumbersTable />
       </div>
      </header>
      );
      }
}
export default NumbersHeader

import React from 'react';
import KatakanaTable from './katakanaTable';
import KatakanaCard from './katakanaCard';
import KatakanaCard1 from './katakanaCard1';
class KatakanaHeader extends React.Component {
  render() {
		return (
      <header className="headerKatakana">
      <h1 className="header__tagline">Katakana !</h1>
      <div >
      <KatakanaCard />
      <KatakanaTable />
       </div>
       <KatakanaCard1 />
      </header>
      );
      }
}
export default KatakanaHeader
